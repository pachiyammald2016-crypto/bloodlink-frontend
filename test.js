
        function updateAuthUI() {
            const verifiedEmail = localStorage.getItem('donor_verified_email');
            if (verifiedEmail) {
                const headerActions = document.querySelector('.header-actions');
                if (headerActions) {
                    headerActions.innerHTML = `
                        <div class="user-profile-menu" style="display: flex; align-items: center; gap: 0.8rem; background: rgba(255,255,255,0.05); padding: 0.4rem 1rem; border-radius: 50px; border: 1px solid rgba(255,255,255,0.1);">
                            <i class="fa-solid fa-circle-user" style="font-size: 1.5rem; color: var(--accent-red);"></i>
                            <div class="user-details" style="display: flex; flex-direction: column;">
                                <span style="font-size: 0.85rem; font-weight: 600; color: white;">${verifiedEmail.split('@')[0]}</span>
                                <span style="font-size: 0.7rem; color: var(--accent-red); cursor: pointer; font-weight: 500;" onclick="logoutDonor()">Logout</span>
                            </div>
                        </div>
                    `;
                }
            } else {
                const headerActions = document.querySelector('.header-actions');
                if (headerActions) {
                    headerActions.innerHTML = `
                        <div class="system-status" id="systemStatus">
                            <span class="status-indicator offline"></span>
                            <span class="system-status-badge status-text">Checking server...</span>
                        </div>
                    `;
                    checkApiConnection();
                }
            }
        }


        function logoutDonor() {
            sessionStorage.removeItem('donor_id');
            localStorage.removeItem('donor_verified_email');
            const emailInput = document.getElementById('donorEmail');
            if (emailInput) {
                emailInput.value = '';
                emailInput.readOnly = false;
                emailInput.style.backgroundColor = 'rgba(0,0,0,0.3)';
            }
            
            document.getElementById('donorForm').reset();
            const formTitle = document.querySelector('#registerTab .form-header h2');
            const formDesc = document.querySelector('#registerTab .form-header p');
            const submitBtn = document.querySelector('#registerTab button[type="submit"]');
            if (formTitle) formTitle.innerHTML = '<i class="fa-solid fa-user-plus text-primary"></i> Register as a Blood Donor';
            if (formDesc) formDesc.textContent = 'Be someone\'s hero. Register your details to join the active pool of donors in Tamil Nadu.';
            if (submitBtn) submitBtn.textContent = 'Submit Registration';
            
            updateAuthUI();
            switchTab('home');
            showAlert('Logged out successfully.', 'info');
        }

        // Map Initialization Logic
        let leafletMap = null;
        let mapMarkers = [];

        function initializeMap(requestLocation = false) {
            const mapContainer = document.getElementById('liveMap');
            if (!mapContainer) return;
            
            if (!leafletMap) {
                // Initialize map centered on Tamil Nadu by default
                leafletMap = L.map('liveMap').setView([11.1271, 78.6569], 7);
                L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                    subdomains: 'abcd',
                    maxZoom: 19
                }).addTo(leafletMap);
            }

            if (requestLocation) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position) => {
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;
                        leafletMap.setView([lat, lng], 12);
                        
                        // Add a pulse marker for the user
                        const userIcon = L.divIcon({
                            className: 'custom-div-icon',
                            html: '<div style="background-color: #3498db; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(52, 152, 219, 0.8);"></div>',
                            iconSize: [16, 16],
                            iconAnchor: [8, 8]
                        });
                        L.marker([lat, lng], {icon: userIcon}).addTo(leafletMap).bindPopup('<b>Your Location</b>').openPopup();
                        
                    }, (error) => {
                        console.error('Geolocation error:', error);
                        if (window.location.protocol === 'file:') {
                            showAlert('Location blocked by browser for local files. Please use Live Server.', 'error');
                        } else {
                            showAlert('Location access denied or unavailable.', 'warning');
                        }
                    });
                } else {
                    showAlert('Geolocation is not supported by this browser.', 'error');
                }
            }

            // Plot Donors
            plotDonorsOnMap();
        }

        function plotDonorsOnMap() {
            if (!leafletMap) return;
            
            // Clear existing markers
            mapMarkers.forEach(marker => leafletMap.removeLayer(marker));
            mapMarkers = [];
            
            const donorsToMap = mockDonors.filter(d => d.latitude && d.longitude && d.availability !== false);
            
            donorsToMap.forEach(donor => {
                const markerIcon = L.divIcon({
                    className: 'custom-div-icon',
                    html: '<div style="background-color: #ff4757; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 8px rgba(255, 71, 87, 0.8);"></div>',
                    iconSize: [14, 14],
                    iconAnchor: [7, 7]
                });
                const marker = L.marker([donor.latitude, donor.longitude], {icon: markerIcon}).addTo(leafletMap);
                marker.bindPopup(`<b>${donor.bloodGroup}</b><br>${donor.city}<br>${donor.area || ''}`);
                mapMarkers.push(marker);
            });
        }
    
