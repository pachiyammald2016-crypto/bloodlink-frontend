
        // Tamil Nadu Districts with Approximate Coordinates
        const TAMIL_NADU_DISTRICTS = {
            "Ariyalur": { lat: 11.1401, lng: 79.0747 },
            "Chengalpattu": { lat: 12.6841, lng: 79.9836 },
            "Chennai": { lat: 13.0827, lng: 80.2707 },
            "Coimbatore": { lat: 11.0168, lng: 76.9558 },
            "Cuddalore": { lat: 11.7480, lng: 79.7714 },
            "Dharmapuri": { lat: 12.1211, lng: 78.1582 },
            "Dindigul": { lat: 10.3673, lng: 77.9806 },
            "Erode": { lat: 11.3410, lng: 77.7172 },
            "Kallakurichi": { lat: 11.7380, lng: 78.9639 },
            "Kanchipuram": { lat: 12.8342, lng: 79.7036 },
            "Kanyakumari": { lat: 8.1833, lng: 77.4119 },
            "Karur": { lat: 10.9601, lng: 78.0766 },
            "Krishnagiri": { lat: 12.5186, lng: 78.2137 },
            "Madurai": { lat: 9.9252, lng: 78.1198 },
            "Mayiladuthurai": { lat: 11.1018, lng: 79.6522 },
            "Nagapattinam": { lat: 10.7672, lng: 79.8444 },
            "Namakkal": { lat: 11.2189, lng: 78.1672 },
            "Nilgiris": { lat: 11.4102, lng: 76.6950 },
            "Perambalur": { lat: 11.2333, lng: 78.8833 },
            "Pudukkottai": { lat: 10.3797, lng: 78.8208 },
            "Ramanathapuram": { lat: 9.3639, lng: 78.8395 },
            "Ranipet": { lat: 12.9272, lng: 79.3328 },
            "Salem": { lat: 11.6643, lng: 78.1460 },
            "Sivaganga": { lat: 9.8433, lng: 78.4809 },
            "Tenkasi": { lat: 8.9593, lng: 77.3142 },
            "Thanjavur": { lat: 10.7870, lng: 79.1378 },
            "Theni": { lat: 10.0104, lng: 77.4777 },
            "Thoothukudi": { lat: 8.7642, lng: 78.1348 },
            "Tiruchirappalli": { lat: 10.7905, lng: 78.7047 },
            "Tirunelveli": { lat: 8.7139, lng: 77.7567 },
            "Tirupathur": { lat: 12.4926, lng: 78.5678 },
            "Tiruppur": { lat: 11.1085, lng: 77.3411 },
            "Tiruvallur": { lat: 13.1438, lng: 79.9077 },
            "Tiruvannamalai": { lat: 12.2253, lng: 79.0747 },
            "Tiruvarur": { lat: 10.7749, lng: 79.6346 },
            "Vellore": { lat: 12.9165, lng: 79.1325 },
            "Viluppuram": { lat: 11.9401, lng: 79.4861 },
            "Virudhunagar": { lat: 9.5680, lng: 77.9624 }
        };

        // Tamil Nadu Districts Sub-Areas for live autocomplete suggestions
        const DISTRICT_AREAS = {
            "Ariyalur": ["Ariyalur Town", "Jayankondam", "Sendurai", "Udayarpalayam", "Andimadam", "Thirumanur"],
            "Chengalpattu": ["Tambaram", "Pallavaram", "Chromepet", "Chengalpattu Town", "Maduranthakam", "Mahabalipuram", "Vandalur", "Guduvanchery", "Maraimalai Nagar"],
            "Chennai": ["Adyar", "Velachery", "T. Nagar", "Mylapore", "Anna Nagar", "Nungambakkam", "Guindy", "Royapettah", "Porur", "Besant Nagar", "Triplicane", "Saidapet", "Ambattur", "Perambur", "Kodambakkam", "Mogappair"],
            "Coimbatore": ["Peelamedu", "Gandhipuram", "RS Puram", "Singanallur", "Saravanampatti", "Kovaipudur", "Saibaba Colony", "Vadavalli", "Pollachi", "Mettupalayam", "Sulur", "Thudiyalur"],
            "Cuddalore": ["Cuddalore Town", "Chidambaram", "Panruti", "Virudhachalam", "Neyveli", "Kattumannarkoil", "Tittakudi", "Kurinjipadi"],
            "Dharmapuri": ["Dharmapuri Town", "Harur", "Palacode", "Pennagaram", "Pappireddipatti", "Nallampalli", "Karimangalam"],
            "Dindigul": ["Dindigul Town", "Palani", "Kodaikanal", "Oddanchatram", "Natham", "Batlagundu", "Nilakottai", "Vedasandur"],
            "Erode": ["Erode Town", "Perundurai", "Gobichettipalayam", "Bhavani", "Sathyamangalam", "Anthiyur", "Kodumudi"],
            "Kallakurichi": ["Kallakurichi Town", "Sankarapuram", "Chinnasalem", "Ulundurpet", "Tirukkoyilur", "Kalvarayan Hills"],
            "Kanchipuram": ["Kanchipuram Town", "Sriperumbudur", "Kundrathur", "Walajabad", "Uthiramerur"],
            "Kanyakumari": ["Nagercoil", "Kanyakumari Town", "Thuckalay", "Marthandam", "Colachel", "Padmanabhapuram", "Kuzhithurai"],
            "Karur": ["Karur Town", "Kulithalai", "Aravakurichi", "Manmangalam", "Pugalur", "Krishnarayapuram"],
            "Krishnagiri": ["Krishnagiri Town", "Hosur", "Denkanikottai", "Pochampalli", "Uthangarai", "Shoolagiri", "Bargur"],
            "Madurai": ["Anna Nagar", "Goripalayam", "K.Pudur", "Sellur", "Mattuthavani", "Thirumangalam", "Melur", "Usilampatti", "Vadipatti", "Thiruparankundram"],
            "Mayiladuthurai": ["Mayiladuthurai Town", "Sirkazhi", "Tharangambadi", "Kuthalam", "Poompuhar"],
            "Nagapattinam": ["Nagapattinam Town", "Velankanni", "Vedaranyam", "Thirukkuvalai", "Kilvelur"],
            "Namakkal": ["Namakkal Town", "Rasipuram", "Tiruchengode", "Komarapalayam", "Paramathi Velur", "Sendamangalam", "Kolli Hills"],
            "Nilgiris": ["Ooty (Udhagamandalam)", "Coonoor", "Kotagiri", "Gudalur", "Wellington", "Kundah"],
            "Perambalur": ["Perambalur Town", "Veppanthattai", "Alathur", "Kunnam"],
            "Pudukkottai": ["Pudukkottai Town", "Aranthangi", "Alangudi", "Illuppur", "Gandarvakottai", "Karambakudi", "Thirumayam", "Ponnamaravathi"],
            "Ramanathapuram": ["Ramanathapuram Town", "Rameswaram", "Paramakudi", "Keezhakarai", "Kamuthi", "Mudukulathur", "Tiruvadanai"],
            "Ranipet": ["Ranipet Town", "Arakkonam", "Arcot", "Walajah", "Sholinghur", "Kalavai"],
            "Salem": ["Shevapet", "Hasthampatti", "Suramangalam", "Fairlands", "Omalur", "Attur", "Mettur", "Yercaud", "Sankagiri", "Edappadi"],
            "Sivaganga": ["Sivaganga Town", "Karaikudi", "Devakottai", "Manamadurai", "Kalayarkoil", "Tiruppattur", "Ilayangudi"],
            "Tenkasi": ["Tenkasi Town", "Sankarankovil", "Kadayanallur", "Sengottai", "Alangulam", "Vasudevanallur", "Puliyangudi"],
            "Thanjavur": ["Thanjavur Town", "Kumbakonam", "Pattukkottai", "Orathanadu", "Thiruvaiyaru", "Peravurani", "Papanasam"],
            "Theni": ["Theni Town", "Bodinayakanur", "Cumbum", "Periyakulam", "Uthamapalayam", "Andipatti", "Chinnamanur"],
            "Thoothukudi": ["Thoothukudi Town", "Kovilpatti", "Tiruchendur", "Srivaikuntam", "Ettayapuram", "Sathankulam", "Vilathikulam"],
            "Tiruchirappalli": ["Cantonment", "Thillai Nagar", "Srirangam", "KK Nagar", "Lalgudi", "Tiruverumbur", "Musiri", "Manapparai", "Thuraiyur"],
            "Tirunelveli": ["Palayamkottai", "Tirunelveli Town", "Junction", "Melapalayam", "Cheranmahadevi", "Vallioor", "Nanguneri", "Radhapuram"],
            "Tirupathur": ["Tirupathur Town", "Vaniyambadi", "Ambur", "Natrampalli", "Jolarpet"],
            "Tiruppur": ["Tiruppur Town", "Avinashi", "Palladam", "Kangeyam", "Udumalpet", "Dharapuram", "Madathukulam"],
            "Tiruvallur": ["Tiruvallur Town", "Avadi", "Poonamallee", "Tiruttani", "Gummidipoondi", "Ponneri", "Redhills"],
            "Tiruvannamalai": ["Tiruvannamalai Town", "Arani", "Cheyyar", "Polur", "Chengam", "Vandavasi", "Kalasapakkam"],
            "Tiruvarur": ["Tiruvarur Town", "Mannargudi", "Thiruthuraipoondi", "Nannilam", "Kudavasal", "Valangaiman"],
            "Vellore": ["Katpadi", "Sathuvachari", "Vellore Fort Area", "Bagayam", "Gudiyatham", "Pernambut", "Anaicut"],
            "Viluppuram": ["Viluppuram Town", "Tindivanam", "Gingee", "Vikravandi", "Vanur", "Marakkanam"],
            "Virudhunagar": ["Virudhunagar Town", "Sivakasi", "Rajapalayam", "Aruppukkottai", "Sattur", "Srivilliputhur", "Kariapatti"]
        };



        // Blood Compatibility Mapping (Recipient -> Compatible Donors)
        const COMPATIBILITY_MAP = {
            'O-': ['O-'],
            'O+': ['O-', 'O+'],
            'A-': ['O-', 'A-'],
            'A+': ['O-', 'O+', 'A-', 'A+'],
            'B-': ['O-', 'B-'],
            'B+': ['O-', 'O+', 'B-', 'B+'],
            'AB-': ['O-', 'A-', 'B-', 'AB-'],
            'AB+': ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+']
        };

        let API_BASE_URL = 'https://bloodlink-backend-im81.onrender.com/api';
        if (window.location.protocol === 'file:') {
            API_BASE_URL = 'http://localhost:8080/api';
        } else if (
            window.location.hostname === 'localhost' || 
            window.location.hostname === '127.0.0.1' ||
            window.location.hostname.startsWith('192.168.') ||
            window.location.hostname.startsWith('10.') ||
            window.location.hostname.startsWith('172.')
        ) {
            API_BASE_URL = `http://${window.location.hostname}:8080/api`;
        }
        let isLiveApi = true;
        let mockDonors = [];
        let mockRequests = [];
        let allLoadedDonors = [];

        // Initialize App
        window.addEventListener('DOMContentLoaded', () => {
            // Check for reset parameter to clear local storage
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('reset') === 'true') {
                localStorage.clear();
                sessionStorage.clear();
                console.log("Local storage wiped via reset parameter.");
                // Remove parameter from URL without reloading
                window.history.replaceState({}, document.title, window.location.pathname);
                showAlert('All local app data cleared successfully!', 'success');
            }

            populateDistricts();
            setupSidebarNav();
            setupToggleListeners();
            initializeMockData();
            checkApiConnection();
            

            updateAuthUI();
            
            // Check Admin Status on Load
            if (sessionStorage.getItem('admin_verified') === 'true') {
                const donorsTab = document.getElementById('navAdminDonors');
                const adminLoginBtn = document.getElementById('adminLoginBtn');
                
                if(donorsTab) donorsTab.style.display = 'flex';
                if(adminLoginBtn) adminLoginBtn.style.display = 'none';
            }
        });

        // Setup sidebar tabs
        function setupSidebarNav() {
            const buttons = document.querySelectorAll('.nav-btn');
            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const tabId = btn.getAttribute('data-tab');
                    // Only intercept Register Donor for authentication
                    if (tabId === 'register') {
                        requireAuthAndNavigate(tabId);
                    } else {
                        switchTab(tabId);
                    }
                });
            });
        }

        // Global variables to store temporary donor registration details during OTP verification
        let pendingDonorData = null;
        let pendingLoginEmail = '';

        function openDonorSignUpModal() {
            document.getElementById('donorSignUpEmail').value = '';
            document.getElementById('donorSignUpModal').classList.remove('hidden');
        }

        function closeDonorSignUpModal() {
            document.getElementById('donorSignUpModal').classList.add('hidden');
        }

        async function handleDonorSignUpSubmit(event) {
            event.preventDefault();
            const email = document.getElementById('donorSignUpEmail').value.trim();
            const password = document.getElementById('donorSignUpPassword').value;
            
            if (!email) {
                showAlert('Please enter an email.', 'error');
                return;
            }
            if (!password) {
                showAlert('Please enter a password.', 'error');
                return;
            }

            try {
                // Check if email already exists
                const response = await fetch(`${API_BASE_URL}/donors/email/${encodeURIComponent(email)}`);
                if (response.ok) {
                    // Email exists
                    showAlert('Email already registered. Please login.', 'error');
                    closeDonorSignUpModal();
                    openDonorLoginModal();
                } else if (response.status === 404) {
                    // Email does not exist. Safe to register.
                    localStorage.setItem('donor_verified_email', email);
                    sessionStorage.setItem('pending_signup_password', password);
                    closeDonorSignUpModal();
                    
                    const emailInput = document.getElementById('donorEmail');
                    if (emailInput) {
                        emailInput.value = email;
                        emailInput.readOnly = true;
                        emailInput.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    }
                    
                    const targetTab = sessionStorage.getItem('post_auth_tab') || 'register';
                    sessionStorage.removeItem('post_auth_tab');
                    switchTab(targetTab);
                } else {
                    showAlert('An error occurred checking email availability.', 'error');
                }
            } catch (error) {
                console.error('Error during sign up check:', error);
                showAlert('Failed to connect to backend server.', 'error');
            }
        }

        function requireAuthAndNavigate(targetTab) {
            const isVerified = localStorage.getItem('donor_verified_email');
            if (isVerified) {
                if (targetTab === 'register') {
                    const hasRegistered = localStorage.getItem('has_registered');
                    if (hasRegistered === 'true') {
                        showAlert('You are already registered! You can update your profile here.', 'info');
                    }
                    checkExistingDonorAndSetupForm(isVerified);
                }
                switchTab(targetTab);
            } else {
                sessionStorage.setItem('post_auth_tab', targetTab);
                openDonorSignUpModal();
            }
        }

        function openDonorLoginModal() {
            document.getElementById('donorLoginEmail').value = '';
            document.getElementById('donorLoginModal').classList.remove('hidden');
        }

        function closeDonorLoginModal() {
            document.getElementById('donorLoginModal').classList.add('hidden');
        }

        async function handleDonorLoginSubmit(event) {
            event.preventDefault();
            const email = document.getElementById('donorLoginEmail').value.trim();
            const password = document.getElementById('donorLoginPassword').value;
            
            if (!email || !password) {
                showAlert('Please enter both email and password.', 'error');
                return;
            }

            try {
                let userExists = false;
                let loginSuccess = false;
                if (isLiveApi) {
                    const loginRes = await fetch(`${API_BASE_URL}/login`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email: email, password: password })
                    });
                    
                    if (loginRes.ok) {
                        loginSuccess = true;
                        userExists = true;
                    } else if (loginRes.status === 404) {
                        userExists = false;
                    } else {
                        userExists = true;
                        loginSuccess = false;
                    }
                }
                
                if (!isLiveApi) {
                    const localExists = (mockDonors || []).find(d => d.email === email);
                    if (localExists) {
                        userExists = true;
                        loginSuccess = true;
                    }
                }

                if (loginSuccess) {
                    localStorage.setItem('donor_verified_email', email);
                    localStorage.setItem('has_registered', 'true');
                    closeDonorLoginModal();
                    
                    const targetTab = sessionStorage.getItem('post_auth_tab') || 'register';
                    sessionStorage.removeItem('post_auth_tab');
                    switchTab(targetTab);
                    
                    if (targetTab === 'register') {
                        checkExistingDonorAndSetupForm(email);
                    }
                } else if (userExists && !loginSuccess) {
                    showAlert('Invalid email or password.', 'error');
                } else {
                    showAlert('Account not found. Please sign up first.', 'warning');
                    closeDonorLoginModal();
                    openDonorSignUpModal();
                    document.getElementById('donorSignUpEmail').value = email;
                }
            } catch (error) {
                console.error('Error during login:', error);
                showAlert('Failed to connect to backend server.', 'error');
            }
        }

        async function checkExistingDonorAndSetupForm(email) {
            try {
                let existing = null;
                if (isLiveApi) {
                    const response = await fetch(`${API_BASE_URL}/donors/email/${encodeURIComponent(email)}`);
                    if (response.ok) {
                        existing = await response.json();
                    }
                } else {
                    existing = (mockDonors || []).find(d => d.email === email);
                }

                if (existing) {
                    const formTitle = document.querySelector('#registerTab .form-header h2');
                    const formDesc = document.querySelector('#registerTab .form-header p');
                    const submitBtn = document.querySelector('#registerTab button[type="submit"]');
                    const banner = document.getElementById('updateProfileBanner');
                    
                    sessionStorage.setItem('donor_id', existing.id);
                        
                        // Pre-fill form values
                        document.getElementById('donorName').value = existing.name || '';
                        document.getElementById('donorBloodGroup').value = existing.bloodGroup || existing.blood_group || '';
                        document.getElementById('donorDistrict').value = existing.city || '';
                        
                        // Trigger district change to load areas
                        handleDistrictChange('donorDistrict', 'donorAreaList');
                        document.getElementById('donorArea').value = existing.area || '';
                        document.getElementById('donorPhone').value = existing.phone || '';
                        document.getElementById('donorEmail').value = existing.email || '';
                        document.getElementById('donorEmail').readOnly = true;
                        document.getElementById('donorEmail').style.backgroundColor = 'rgba(255,255,255,0.05)';

                        document.getElementById('donorLastDonation').value = existing.lastDonation || existing.last_donation || '';
                        document.getElementById('donorAvailability').checked = existing.availability !== false;
                        document.getElementById('donorBio').value = existing.bio || '';
                        
                        const latVal = existing.latitude;
                        const lngVal = existing.longitude;
                        document.getElementById('donorLat').value = latVal || '';
                        document.getElementById('donorLng').value = lngVal || '';
                        
                        const status = document.getElementById('locationStatus');
                        if (latVal && lngVal && status) {
                            status.innerHTML = `<span style="color: #4cd137;"><i class="fa-solid fa-circle-check"></i> GPS Linked (${parseFloat(latVal).toFixed(4)}, ${parseFloat(lngVal).toFixed(4)})</span>`;
                        } else if (status) {
                            status.textContent = 'Not shared (uses district center)';
                            status.style.color = 'var(--text-muted)';
                        }

                        // Update toggle switch label
                        const label = document.getElementById('availabilityLabel');
                        if (label) {
                            label.textContent = existing.availability !== false ? 'Available to Donate Now' : 'Busy / Not Available';
                        }
                        
                        // Check screening checkmarks (since we update, we check them so they don't have to re-tick them for simple status updates)
                        document.getElementById('healthTattoo').checked = true;
                        document.getElementById('healthAlcohol').checked = true;
                        document.getElementById('healthDisease').checked = true;
                        document.getElementById('healthWeight').checked = true;
                        document.getElementById('donorDisclaimer').checked = true;

                        if (formTitle) formTitle.innerHTML = '<i class="fa-solid fa-user-pen text-primary"></i> Update Your Donor Profile';
                        if (formDesc) formDesc.textContent = 'Manage your availability status, contact details, and location for matching.';
                        if (submitBtn) submitBtn.textContent = 'Update Profile';
                        
                        // Hide password field during update
                        const pwdInput = document.getElementById('donorPassword');
                        if (pwdInput) {
                            const pwdGroup = pwdInput.closest('.form-group');
                            if (pwdGroup) {
                                pwdGroup.style.display = 'none';
                            }
                            pwdInput.value = 'AuthPlaceholder123';
                        }
                    } else {
                        sessionStorage.removeItem('donor_id');
                        
                        // Reset fields (except email)
                        document.getElementById('donorName').value = '';
                        document.getElementById('donorBloodGroup').value = '';
                        document.getElementById('donorDistrict').value = '';
                        document.getElementById('donorArea').value = '';
                        document.getElementById('donorPhone').value = '';
                        
                        document.getElementById('donorEmail').value = email;
                        document.getElementById('donorEmail').readOnly = true;
                        document.getElementById('donorEmail').style.backgroundColor = 'rgba(255,255,255,0.05)';
                        
                        document.getElementById('donorLastDonation').value = '';
                        document.getElementById('donorAvailability').checked = true;
                        document.getElementById('donorBio').value = '';
                        document.getElementById('donorLat').value = '';
                        document.getElementById('donorLng').value = '';
                        
                        document.getElementById('healthTattoo').checked = false;
                        document.getElementById('healthAlcohol').checked = false;
                        document.getElementById('healthDisease').checked = false;
                        document.getElementById('healthWeight').checked = false;
                        document.getElementById('donorDisclaimer').checked = false;

                        if (formTitle) formTitle.innerHTML = '<i class="fa-solid fa-user-plus text-primary"></i> Register as a Blood Donor';
                        if (formDesc) formDesc.textContent = 'Be someone\'s hero. Register your details to join the active pool of donors in Tamil Nadu.';
                        if (submitBtn) submitBtn.textContent = 'Submit Registration';
                        
                        if (banner) banner.classList.add('hidden');
                    }
            } catch (err) {
                console.error('Error checking existing donor:', err);
            }
        }

        function handleDonorRegistrationSubmit(event) {
            event.preventDefault();
            
            const latVal = document.getElementById('donorLat').value;
            const lngVal = document.getElementById('donorLng').value;
            const email = document.getElementById('donorEmail').value.trim();

            if (!email) {
                showAlert('Please provide your email address.', 'error');
                return;
            }

            pendingDonorData = {
                name: document.getElementById('donorName').value,
                bloodGroup: document.getElementById('donorBloodGroup').value,
                city: document.getElementById('donorDistrict').value,
                area: document.getElementById('donorArea').value,
                phone: document.getElementById('donorPhone').value,
                email: email,
                password: sessionStorage.getItem('pending_signup_password') || null,
                lastDonation: document.getElementById('donorLastDonation').value || null,
                availability: document.getElementById('donorAvailability').checked,
                bio: document.getElementById('donorBio').value,
                latitude: latVal ? parseFloat(latVal) : null,
                longitude: lngVal ? parseFloat(lngVal) : null
            };

            proceedWithDonorRegistration();
        }



        let pendingTargetTab = '';

        function openAdminAuthModal(targetTab) {
            pendingTargetTab = targetTab;
            document.getElementById('adminPasswordInput').value = '';
            document.getElementById('adminAuthModal').classList.remove('hidden');
        }

        function closeAdminAuthModal() {
            document.getElementById('adminAuthModal').classList.add('hidden');
            showAlert('Only Admin can access', 'error');
        }

        function handleAdminAuthSubmit(event) {
            event.preventDefault();
            const password = document.getElementById('adminPasswordInput').value;
            if (password === 'kabipachi123') {
                sessionStorage.setItem('admin_verified', 'true');
                document.getElementById('adminAuthModal').classList.add('hidden');
                showAlert('Admin verification successful!', 'success');
                
                // Reveal Admin Tabs
                document.getElementById('navAdminDonors').style.display = 'flex';
                document.getElementById('adminLoginBtn').style.display = 'none';

                if (pendingTargetTab) {
                    switchTab(pendingTargetTab);
                }
            } else {
                document.getElementById('adminAuthModal').classList.add('hidden');
                showAlert('Only Admin can access', 'error');
            }
        }

        function switchTab(tabId) {
            if (tabId === 'donors') {
                const isAdmin = sessionStorage.getItem('admin_verified') === 'true';
                if (!isAdmin) {
                    openAdminAuthModal(tabId);
                    return;
                }
            }
            if (tabId === 'register') {
                // Anyone can access the registration tab now
            }
            if (tabId === 'match') {
                if (sessionStorage.getItem('active_blood_request') !== 'true') {
                    showAlert('Please submit a blood request first.', 'warning');
                    switchTab('request');
                    return;
                }
            }

            document.querySelectorAll('.nav-btn').forEach(btn => {
                if (btn.getAttribute('data-tab') === tabId) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            document.querySelectorAll('.tab-content').forEach(tab => {
                if (tab.id === `${tabId}Tab`) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });

            if (tabId === 'donors') {
                loadDonors();
            } else if (tabId === 'requests-feed') {
                loadRequests();
            } else if (tabId === 'home') {
                loadStats();
            }
        }

        function setupToggleListeners() {
            const availToggle = document.getElementById('donorAvailability');
            availToggle.addEventListener('change', (e) => {
                const label = document.getElementById('availabilityLabel');
                label.textContent = e.target.checked ? 'Available to Donate Now' : 'Busy / Not Available';
            });

            const editToggle = document.getElementById('editAvailability');
            editToggle.addEventListener('change', (e) => {
                const label = document.getElementById('editAvailabilityLabel');
                label.textContent = e.target.checked ? 'Available' : 'Not Available';
            });
        }

        // Populate Tamil Nadu districts dropdowns
        function populateDistricts() {
            const districtDropdowns = [
                document.getElementById('donorDistrict'),
                document.getElementById('reqDistrict'),
                document.getElementById('filterDistrict'),
                document.getElementById('matchDistrict')
            ];

            const sortedDistricts = Object.keys(TAMIL_NADU_DISTRICTS).sort();
            
            districtDropdowns.forEach(dropdown => {
                if (!dropdown) return;
                
                sortedDistricts.forEach(district => {
                    const option = document.createElement('option');
                    option.value = district;
                    option.textContent = district;
                    dropdown.appendChild(option);
                });
            });
        }

        // Handle District selection changes to update Area suggestion datalist dynamically
        function handleDistrictChange(selectId, datalistId) {
            const select = document.getElementById(selectId);
            const datalist = document.getElementById(datalistId);
            if (!select || !datalist) return;

            const district = select.value;
            datalist.innerHTML = '';

            const areas = DISTRICT_AREAS[district] || [];
            areas.forEach(area => {
                const option = document.createElement('option');
                option.value = area;
                datalist.appendChild(option);
            });
        }

        // Get Live GPS Location using Geolocation API
        function getLiveLocation() {
            const status = document.getElementById('locationStatus');
            const latInput = document.getElementById('donorLat');
            const lngInput = document.getElementById('donorLng');

            if (!navigator.geolocation) {
                status.textContent = 'Geolocation not supported by browser.';
                status.style.color = '#ff4d5a';
                return;
            }

            status.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Getting location...';
            status.style.color = 'var(--text-muted)';

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    latInput.value = lat;
                    lngInput.value = lng;
                    status.innerHTML = `<span style="color: #4cd137;"><i class="fa-solid fa-circle-check"></i> GPS Linked (${lat.toFixed(4)}, ${lng.toFixed(4)})</span>`;
                    showAlert('GPS Location successfully linked to your profile!', 'success');
                },
                (error) => {
                    console.error("Location error", error);
                    status.textContent = 'Failed to get location (Permission denied or timeout).';
                    status.style.color = '#ff4d5a';
                },
                { enableHighAccuracy: true, timeout: 8000 }
            );
        }

        // Report Fake Donor
        function reportDonor(id, name) {
            let reported = JSON.parse(localStorage.getItem('reported_donors') || '[]');
            if (!reported.includes(id)) {
                reported.push(id);
                localStorage.setItem('reported_donors', JSON.stringify(reported));
                showAlert(`Donor ${name} has been reported. Admin verification pending.`, 'warning');
            } else {
                showAlert(`Donor ${name} has already been reported.`, 'info');
            }
            loadDonors();
        }

        // Lookup Donor Location by Phone Number
        async function lookupDonorLocation() {
            const phone = document.getElementById('lookupPhone').value.trim();
            const resultDiv = document.getElementById('lookupResult');
            resultDiv.classList.remove('hidden');
            resultDiv.innerHTML = '<p><i class="fa-solid fa-spinner fa-spin"></i> Searching for donor location...</p>';

            if (!phone || phone.length !== 10) {
                resultDiv.innerHTML = `<p style="color: #ff4d5a;"><i class="fa-solid fa-triangle-exclamation"></i> Please enter a valid 10-digit phone number.</p>`;
                return;
            }

            let donor = null;
            if (isLiveApi) {
                try {
                    const res = await fetch(`${API_BASE_URL}/donors`);
                    if (res.ok) {
                        const donors = await res.json();
                        donor = donors.find(d => d.phone === phone);
                    }
                } catch (e) {
                    console.error("Live lookup failed", e);
                }
            }
            
            if (!donor) {
                donor = allLoadedDonors.find(d => d.phone === phone) || mockDonors.find(d => d.phone === phone);
            }

            if (!donor) {
                resultDiv.innerHTML = `<p style="color: #ff4d5a;"><i class="fa-solid fa-magnifying-glass"></i> No donor found with phone number +91 ${phone}.</p>`;
                return;
            }

            const hasCoords = (donor.latitude !== undefined && donor.latitude !== null && donor.latitude !== 0) &&
                              (donor.longitude !== undefined && donor.longitude !== null && donor.longitude !== 0);
            
            let locationHtml = '';
            if (hasCoords) {
                const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${donor.latitude},${donor.longitude}`;
                locationHtml = `
                    <p style="color: #4cd137; margin: 0.25rem 0;"><i class="fa-solid fa-circle-check"></i> <strong>Location Status:</strong> Exact GPS coordinates registered!</p>
                    <p style="margin: 0.25rem 0;"><strong>Coordinates:</strong> Latitude: ${donor.latitude.toFixed(6)}, Longitude: ${donor.longitude.toFixed(6)}</p>
                    <a href="${mapsUrl}" target="_blank" class="btn btn-primary btn-sm" style="margin-top: 0.5rem; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;">
                        <i class="fa-solid fa-map-location"></i> View on Google Maps
                    </a>
                `;
                
                // Show on Leaflet Map
                if (typeof L !== 'undefined' && leafletMap) {
                    leafletMap.setView([donor.latitude, donor.longitude], 15);
                    const searchedIcon = L.divIcon({
                        className: 'custom-div-icon',
                        html: `<div style='background-color:#ff4d5a; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 15px rgba(255,77,90,0.9); animation: pulse 1.5s infinite;'></div>`,
                        iconSize: [24, 24],
                        iconAnchor: [12, 12]
                    });
                    const marker = L.marker([donor.latitude, donor.longitude], {icon: searchedIcon}).addTo(leafletMap);
                    marker.bindPopup(`<b style="color:var(--accent-red); font-size:1.1rem;">${donor.name} (${donor.bloodGroup || donor.blood_group})</b><br>${donor.phone}<br>${donor.area || ''}, ${donor.city}`).openPopup();
                    mapMarkers.push(marker);
                    setTimeout(() => {
                        document.getElementById('liveMap').scrollIntoView({behavior: 'smooth', block: 'center'});
                    }, 100);
                }
            } else {
                const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(donor.area + ', ' + donor.city + ', Tamil Nadu')}`;
                locationHtml = `
                    <p style="color: var(--text-muted); margin: 0.25rem 0;"><i class="fa-solid fa-circle-info"></i> <strong>Location Status:</strong> District center fallback (exact GPS not shared).</p>
                    <p style="margin: 0.25rem 0;"><strong>District:</strong> ${donor.city}, Area: ${donor.area || 'N/A'}</p>
                    <a href="${mapsUrl}" target="_blank" class="btn btn-secondary btn-sm" style="margin-top: 0.5rem; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05); color: white;">
                        <i class="fa-solid fa-map-location"></i> View District on Google Maps
                    </a>
                `;
                
                // Fallback: zoom to district if possible
                if (typeof L !== 'undefined' && leafletMap && TAMIL_NADU_DISTRICTS[donor.city]) {
                    const dCoords = TAMIL_NADU_DISTRICTS[donor.city];
                    leafletMap.setView([dCoords.lat, dCoords.lng], 10);
                    setTimeout(() => {
                        document.getElementById('liveMap').scrollIntoView({behavior: 'smooth', block: 'center'});
                    }, 100);
                }
            }

            resultDiv.innerHTML = `
                <h5 style="margin-bottom: 0.5rem; color: var(--text-primary); font-size: 1.05rem;">${donor.name} (${donor.bloodGroup || donor.blood_group})</h5>
                ${locationHtml}
            `;
        }

        // OpenStreetMap Nominatim Hospital Geocoder
        async function geocodeHospital(hospitalName, districtName) {
            try {
                const query = `${hospitalName}, ${districtName}, Tamil Nadu, India`;
                const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`;
                const response = await fetch(url, {
                    headers: { 'Accept-Language': 'en' }
                });
                if (response.ok) {
                    const data = await response.json();
                    if (data && data.length > 0) {
                        return {
                            lat: parseFloat(data[0].lat),
                            lng: parseFloat(data[0].lon),
                            displayName: data[0].display_name
                        };
                    }
                }
            } catch (e) {
                console.error("Geocoding failed", e);
            }
            return null;
        }

        // Test Connection to Backend
        async function checkApiConnection() {
            const statusIndicator = document.getElementById('systemStatus');
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 60000); // Wait 60s for Render cold start
                
                const response = await fetch(`${API_BASE_URL}/donors`, { 
                    signal: controller.signal 
                });
                
                clearTimeout(timeoutId);
                
                if (response.ok) {
                    isLiveApi = true;
                    statusIndicator.innerHTML = '<span class="status-indicator live"></span><span class="status-text">Connected to MySQL API</span>';
                    statusIndicator.querySelector('.status-indicator').classList.add('live');
                } else {
                    throw new Error('Server returned error status');
                }
            } catch (err) {
                // We keep isLiveApi = true to force the app to always ATTEMPT backend calls
                // If it fails during a specific action, the catch block of that action will handle the fallback.
                statusIndicator.innerHTML = '<span class="status-indicator offline"></span><span class="status-text">Backend Unreachable (Mock Data Fallback)</span>';
                console.log('Backend connection failed. Operating in offline LocalStorage mode.', err);
            }
            loadStats();
        }

        // Initialize Mock Data in LocalStorage (No default values)
        function initializeMockData() {
            if (!localStorage.getItem('bloodlink_clean_db_v7')) {
                localStorage.clear();
                sessionStorage.clear();
                localStorage.setItem('bloodlink_clean_db_v7', 'true');
            }

            if (!localStorage.getItem('bloodlink_donors')) {
                localStorage.setItem('bloodlink_donors', JSON.stringify([]));
            }
            if (!localStorage.getItem('bloodlink_requests')) {
                localStorage.setItem('bloodlink_requests', JSON.stringify([]));
            }

            mockDonors = JSON.parse(localStorage.getItem('bloodlink_donors'));
            mockRequests = JSON.parse(localStorage.getItem('bloodlink_requests'));
        }

        // Load stats for Home page
        async function loadStats() {
            let donorsCount = 0;
            let requestsCount = 0;

            if (isLiveApi) {
                try {
                    const donorsResponse = await fetch(`${API_BASE_URL}/donors`);
                    const donors = await donorsResponse.json();
                    donorsCount = donors.filter(d => d.availability || d.availability === undefined).length;

                    const reqResponse = await fetch(`${API_BASE_URL}/requests`);
                    const reqs = await reqResponse.json();
                    requestsCount = reqs.filter(r => r.status === 'Active' || r.status === 'ACTIVE').length;
                } catch (e) {
                    console.error("Failed to load live stats. Using mocks.", e);
                    donorsCount = mockDonors.filter(d => d.availability).length;
                    requestsCount = mockRequests.filter(r => r.status === 'Active').length;
                }
            } else {
                donorsCount = mockDonors.filter(d => d.availability).length;
                requestsCount = mockRequests.filter(r => r.status === 'Active').length;
            }

            document.getElementById('statDonorsCount').textContent = donorsCount;
            document.getElementById('statRequestsCount').textContent = requestsCount;
        }

        // Load Donors
        async function loadDonors() {
            if (isLiveApi) {
                try {
                    const res = await fetch(`${API_BASE_URL}/donors`);
                    allLoadedDonors = await res.json();
                } catch (e) {
                    console.error("Failed fetching live donors, fallback to mock", e);
                    allLoadedDonors = mockDonors;
                }
            } else {
                allLoadedDonors = mockDonors;
            }
            renderDonorsList(allLoadedDonors);
        }

        // Apply Donor Filters (called on search or dropdown filter changes)
        function applyDonorFilters() {
            renderDonorsList(allLoadedDonors);
        }

        // Render Donors
        function renderDonorsList(donors) {
            const grid = document.getElementById('donorsGrid');
            const emptyState = document.getElementById('donorsEmptyState');
            grid.innerHTML = '';

            const bg = document.getElementById('filterBloodGroup').value;
            const dist = document.getElementById('filterDistrict').value;
            const avail = document.getElementById('filterAvailability').value;
            const q = document.getElementById('searchDonorQuery').value.toLowerCase().trim();

            const filtered = donors.filter(d => {
                const group = d.bloodGroup || d.blood_group;
                if (bg !== 'All' && group !== bg) return false;
                
                const dCity = d.city;
                if (dist !== 'All' && dCity !== dist) return false;
                
                const dAvail = d.availability !== undefined ? d.availability : d.availability;
                if (avail === 'Available' && !dAvail) return false;

                const dName = d.name.toLowerCase();
                const dArea = (d.area || '').toLowerCase();
                if (q && !dName.includes(q) && !dArea.includes(q)) return false;

                return true;
            });

            if (filtered.length === 0) {
                emptyState.classList.remove('hidden');
                grid.classList.add('hidden');
                return;
            }

            emptyState.classList.add('hidden');
            grid.classList.remove('hidden');

            filtered.forEach(d => {
                const card = document.createElement('div');
                const av = d.availability !== undefined ? d.availability : d.availability;
                
                const reported = JSON.parse(localStorage.getItem('reported_donors') || '[]');
                const isReported = reported.includes(d.id);
                
                card.className = `donor-card glass-card ${!av ? 'unavailable' : ''} ${isReported ? 'reported-fake' : ''}`;
                
                const group = d.bloodGroup || d.blood_group;
                const dateText = d.lastDonation || d.last_donation ? formatDate(d.lastDonation || d.last_donation) : 'Never';
                
                const reportedBadge = isReported ? `<span class="reported-fake-badge"><i class="fa-solid fa-triangle-exclamation"></i> Reported Fake</span>` : '';

                // Bilingual WhatsApp Message
                const waMsg = `Hello ${d.name}, we found your contact on BloodLink and need an urgent blood donation. Please help!\n\nவணக்கம் ${d.name}, BloodLink-ல் உங்கள் எண்ணைப் பார்த்தோம். அவசரமாக இரத்தம் தேவைப்படுகிறது. தயவுசெய்து உதவவும்!`;
                const waUrl = `https://wa.me/91${d.phone}?text=${encodeURIComponent(waMsg)}`;

                card.innerHTML = `
                    <div class="donor-card-header">
                        <div class="donor-avatar">
                            <span>${group}</span>
                        </div>
                        <div class="donor-title">
                            <h4 style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                                ${d.name} ${reportedBadge}
                            </h4>
                            <p><i class="fa-solid fa-location-dot"></i> ${d.area}, ${d.city}</p>
                            <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;"><i class="fa-solid fa-phone"></i> +91 ${d.phone}</p>
                        </div>
                    </div>
                    <div class="donor-details">
                        <p><strong>Last Donation:</strong> ${dateText}</p>
                        <p><strong>Bio:</strong> ${d.bio || 'No bio provided.'}</p>
                        <div class="status-pill ${av ? 'available' : 'busy'}">
                            ${av ? 'Available to Donate' : 'Unavailable'}
                        </div>
                    </div>
                    <div class="donor-card-actions">
                        <a href="tel:+91${d.phone}" class="btn btn-call flex-btn">
                            <i class="fa-solid fa-phone"></i> Call
                        </a>
                        <a href="${waUrl}" target="_blank" class="btn btn-whatsapp flex-btn">
                            <i class="fa-brands fa-whatsapp"></i> WhatsApp
                        </a>
                        <button class="btn btn-secondary btn-sm edit-status-btn" onclick="openEditModal(${d.id}, '${d.name}', ${av})">
                            <i class="fa-solid fa-pen-to-square"></i> Status
                        </button>
                        <button class="btn btn-danger btn-sm report-fake-btn" onclick="reportDonor(${d.id}, '${d.name}')" style="background: rgba(239, 68, 68, 0.2); border: 1px solid rgba(239, 68, 68, 0.4); color: #ef4444;" title="Report this donor as fake">
                            <i class="fa-solid fa-flag"></i> Report
                        </button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Load Blood Requests
        async function loadRequests() {
            let reqs = [];
            if (isLiveApi) {
                try {
                    const res = await fetch(`${API_BASE_URL}/requests`);
                    reqs = await res.json();
                } catch (e) {
                    console.error("Failed fetching live requests, fallback to mock", e);
                    reqs = mockRequests;
                }
            } else {
                reqs = mockRequests;
            }
            renderRequestsFeed(reqs);
        }

        // Render Requests
        function renderRequestsFeed(requests) {
            const feed = document.getElementById('requestsFeedList');
            const emptyState = document.getElementById('requestsEmptyState');
            feed.innerHTML = '';

            const isAdmin = sessionStorage.getItem('admin_verified') === 'true';
            const myRequests = JSON.parse(localStorage.getItem('my_blood_requests') || '[]');

            let activeReqs = requests.filter(r => r.status === 'Active' || r.status === 'ACTIVE');
            
            // Only admins see all requests. Normal users only see their own requests.
            if (!isAdmin) {
                activeReqs = activeReqs.filter(r => myRequests.includes(r.phone));
            }

            if (activeReqs.length === 0) {
                emptyState.classList.remove('hidden');
                feed.classList.add('hidden');
                return;
            }

            emptyState.classList.add('hidden');
            feed.classList.remove('hidden');

            activeReqs.sort((a, b) => {
                const aUrg = a.urgency === 'Critical' ? 3 : (a.urgency === 'Medium' ? 2 : 1);
                const bUrg = b.urgency === 'Critical' ? 3 : (b.urgency === 'Medium' ? 2 : 1);
                if (bUrg !== aUrg) return bUrg - aUrg;
                return new Date(b.createdAt || b.created_at) - new Date(a.createdAt || a.created_at);
            });

            activeReqs.forEach(r => {
                const card = document.createElement('div');
                card.className = `request-card glass-card urgency-${(r.urgency || '').toLowerCase()}`;
                
                const timeAgo = formatTimeAgo(r.createdAt || r.created_at);
                const group = r.bloodGroup || r.blood_group;

                // Extract Area and Landmark
                let area = '';
                let landmarkDisplay = r.landmark || '';
                if (r.landmark && r.landmark.includes(' (Landmark: ')) {
                    const parts = r.landmark.split(' (Landmark: ');
                    area = parts[0];
                    landmarkDisplay = parts[1].replace(')', '');
                } else if (r.landmark) {
                    area = r.landmark;
                }

                // Bilingual WhatsApp Message
                const waMsg = `Hello, I saw your request on BloodLink for ${group} blood at ${r.hospital}. I would like to help!\n\nவணக்கம், BloodLink-ல் ${r.hospital}-ல் ${group} இரத்தம் தேவைப்படும் உங்களுடைய பதிவை பார்த்தேன். நான் இரத்த தானம் செய்து உதவ விரும்புகிறேன்!`;
                const waUrl = `https://wa.me/91${r.phone}?text=${encodeURIComponent(waMsg)}`;

                card.innerHTML = `
                    <div class="request-card-left">
                        <div class="request-blood-group-badge">
                            <span>${group}</span>
                        </div>
                        <div class="urgency-badge ${(r.urgency || 'Normal').toLowerCase()}">${r.urgency}</div>
                    </div>
                    <div class="request-card-body">
                        <div class="request-header-row">
                            <h3>Need ${r.units} Units of ${group}</h3>
                            <span class="request-time"><i class="fa-regular fa-clock"></i> ${timeAgo}</span>
                        </div>
                        <div class="request-patient-info">
                            <p><strong>Patient:</strong> ${r.patientName || r.patient_name}</p>
                            <p><strong>Hospital:</strong> ${r.hospital}</p>
                            <p><i class="fa-solid fa-location-dot"></i> ${area ? area + ', ' : ''}${r.city}</p>
                            ${landmarkDisplay ? `<p><i class="fa-solid fa-map-pin"></i> Landmark: ${landmarkDisplay}</p>` : ''}
                        </div>
                        ${r.notes ? `<div class="request-notes">"${r.notes}"</div>` : ''}
                    </div>
                    <div class="request-card-actions">
                        <button class="btn btn-primary" onclick="startMatchForRequest('${group}', '${r.city}', '${area}')">
                            <i class="fa-solid fa-crosshairs"></i> Find Match
                        </button>
                        <button class="btn btn-call" onclick="handleContactAttender(event, '${r.phone}', '${group}')">
                            <i class="fa-solid fa-phone"></i> Call Attender
                        </button>
                        <button class="btn btn-whatsapp" onclick="handleContactAttender(event, '${r.phone}', '${group}', true, '${encodeURIComponent(waMsg)}')">
                            <i class="fa-brands fa-whatsapp"></i> WhatsApp
                        </button>
                        <button class="btn btn-outline" onclick="fulfillRequest(${r.id})">
                            <i class="fa-solid fa-check"></i> Fulfill
                        </button>
                    </div>
                `;
                feed.appendChild(card);
            });
        }

        function handleContactAttender(event, phone, reqBloodGroup, isWhatsApp = false, waMsg = '') {
            event.preventDefault();
            proceedToContact(phone, isWhatsApp, waMsg);
        }
        
        function proceedToContact(phone, isWhatsApp, waMsg) {
            if (isWhatsApp) {
                window.open(`https://wa.me/91${phone}?text=${waMsg}`, '_blank');
            } else {
                window.location.href = `tel:+91${phone}`;
            }
        }

        // Switch to Match tab and pre-fill matching inputs for a specific blood request hospital
        function startMatchForRequest(bloodGroup, district, area) {
            document.getElementById('matchBloodGroup').value = bloodGroup;
            document.getElementById('matchDistrict').value = district;
            
            handleDistrictChange('matchDistrict', 'matchAreaList');
            document.getElementById('matchArea').value = area || '';
            
            switchTab('match');
            
            const mockEvent = { preventDefault: () => {} };
            findMatches(mockEvent);
        }

        // Submit Donor Registration
        // Proceed with Donor Registration saving
        async function proceedWithDonorRegistration() {
            if (!pendingDonorData) return;
            const donor = pendingDonorData;
            let success = false;
            const isUpdatingProfile = sessionStorage.getItem('donor_id') !== null;
            
            if (isLiveApi) {
                try {
                    const response = await fetch(`${API_BASE_URL}/donors`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: donor.id || null,
                            name: donor.name,
                            bloodGroup: donor.bloodGroup,
                            blood_group: donor.bloodGroup,
                            city: donor.city,
                            area: donor.area,
                            phone: donor.phone,
                            email: donor.email,
                            password: donor.password,
                            lastDonation: donor.lastDonation,
                            last_donation: donor.lastDonation,
                            availability: donor.availability,
                            bio: donor.bio,
                            latitude: donor.latitude,
                            longitude: donor.longitude
                        })
                    });
                    
                    if (response.ok) {
                        success = true;
                        const savedDonor = await response.json();
                        donor.id = savedDonor.id; // Get real ID from backend
                    } else {
                        const errorMsg = await response.text();
                        console.error("Backend error:", errorMsg);
                        showAlert("Registration Failed (Backend): " + errorMsg, "error");
                        return; // Do not proceed to offline fallback if backend explicitly rejected it
                    }
                } catch (e) {
                    console.error("Live API registration failed (Network Error), running local backup", e);
                }
            }

            const verifiedEmail = localStorage.getItem('donor_verified_email');
            
            if (!success) {
                if (verifiedEmail) {
                    const idx = mockDonors.findIndex(d => d.email === verifiedEmail);
                    if (idx !== -1) {
                        donor.id = mockDonors[idx].id;
                        mockDonors[idx] = { ...mockDonors[idx], ...donor };
                    } else {
                        donor.id = Date.now();
                        mockDonors.push(donor);
                    }
                } else {
                    donor.id = Date.now();
                    mockDonors.push(donor);
                }
                localStorage.setItem('bloodlink_donors', JSON.stringify(mockDonors));
            }
            if (isUpdatingProfile) {
                showAlert('Success! Profile updated successfully.', 'success');
                setTimeout(() => {
                    switchTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 1500);
            } else {
                showAlert('Success! Donor registration submitted successfully.', 'success');
                // Populate and show the ID Card
                document.getElementById('cardName').textContent = donor.name;
                document.getElementById('cardBloodGroup').textContent = donor.bloodGroup || donor.blood_group;
                document.getElementById('cardLocation').textContent = donor.city + ' / ' + donor.area;
                document.getElementById('cardId').textContent = 'BLD-' + (donor.id || Date.now()).toString().slice(-6);
                
                document.getElementById('donorCardModal').classList.remove('hidden');
                
                setTimeout(() => {
                    switchTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 500);
            }

            localStorage.setItem('has_registered', 'true');
            document.getElementById('donorForm').reset();
            document.getElementById('availabilityLabel').textContent = 'Available to Donate Now';
            document.getElementById('donorAreaList').innerHTML = '';
            
            const emailInput = document.getElementById('donorEmail');
            if (emailInput && !localStorage.getItem('donor_verified_email')) {
                emailInput.readOnly = false;
            }
            document.getElementById('locationStatus').textContent = 'Not shared (uses district center)';
            document.getElementById('locationStatus').style.color = 'var(--text-muted)';
            pendingDonorData = null;
        }


        // Submit Request Creation
        async function handleRequestSubmit(event) {
            event.preventDefault();

            const reqArea = document.getElementById('reqArea').value;
            const reqLandmark = document.getElementById('reqLandmark').value;
            const combinedLandmark = reqArea + (reqLandmark ? " (Landmark: " + reqLandmark + ")" : "");

            const request = {
                patientName: document.getElementById('reqPatientName').value,
                bloodGroup: document.getElementById('reqBloodGroup').value,
                hospital: document.getElementById('reqHospital').value,
                city: document.getElementById('reqDistrict').value,
                landmark: combinedLandmark,
                units: parseInt(document.getElementById('reqUnits').value),
                urgency: document.getElementById('reqUrgency').value,
                phone: document.getElementById('reqPhone').value,
                notes: document.getElementById('reqNotes').value
            };

            let success = false;

            if (isLiveApi) {
                try {
                    const response = await fetch(`${API_BASE_URL}/requests`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            patientName: request.patientName,
                            patient_name: request.patientName,
                            bloodGroup: request.bloodGroup,
                            blood_group: request.bloodGroup,
                            hospital: request.hospital,
                            city: request.city,
                            landmark: request.landmark,
                            units: request.units,
                            urgency: request.urgency,
                            phone: request.phone,
                            notes: request.notes,
                            status: 'Active'
                        })
                    });

                    if (response.ok) {
                        success = true;
                    }
                } catch (e) {
                    console.error("Live API request submission failed, running local backup", e);
                }
            }

            if (!success) {
                request.id = Date.now();
                request.status = 'Active';
                request.createdAt = new Date().toISOString();
                mockRequests.push(request);
                localStorage.setItem('bloodlink_requests', JSON.stringify(mockRequests));
            }
            
            let myRequests = JSON.parse(localStorage.getItem('my_blood_requests') || '[]');
            if (!myRequests.includes(request.phone)) {
                myRequests.push(request.phone);
                localStorage.setItem('my_blood_requests', JSON.stringify(myRequests));
            }

            sessionStorage.setItem('active_blood_request', 'true');
            showAlert('Success! Emergency blood request posted to the board.', 'success');
            document.getElementById('requestForm').reset();
            document.getElementById('reqAreaList').innerHTML = '';

            setTimeout(() => {
                document.getElementById('matchBloodGroup').value = request.bloodGroup;
                document.getElementById('matchDistrict').value = request.city;
                if(request.hospital) document.getElementById('matchHospital').value = request.hospital;
                switchTab('match');
            }, 800);
        }

        // Fulfill Blood Request
        async function fulfillRequest(id) {
            if (confirm('Mark this blood request as fulfilled?')) {
                let success = false;
                if (isLiveApi) {
                    try {
                        const response = await fetch(`${API_BASE_URL}/requests/${id}/status`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            body: 'status=Fulfilled'
                        });
                        if (response.ok) {
                            success = true;
                        }
                    } catch (e) {
                        console.error("Live API request update failed, running local backup", e);
                    }
                }

                if (!success) {
                    mockRequests = mockRequests.map(r => r.id === id ? { ...r, status: 'Fulfilled' } : r);
                    localStorage.setItem('bloodlink_requests', JSON.stringify(mockRequests));
                }

                showAlert('Blood request marked as fulfilled!', 'success');
                loadRequests();
            }
        }


        // Match Donors and calculate relative proximity
        async function findMatches(event) {
            event.preventDefault();
            
            const targetBloodGroup = document.getElementById('matchBloodGroup').value;
            const targetCity = document.getElementById('matchDistrict').value;
            const targetArea = document.getElementById('matchArea').value.toLowerCase().trim();
            const targetHospital = document.getElementById('matchHospital').value.trim();

            const container = document.getElementById('matchResultsContainer');
            const grid = document.getElementById('matchedDonorsGrid');
            const badge = document.getElementById('matchStatsBadge');
            const compMsg = document.getElementById('compatibilityMessage');

            container.classList.remove('hidden');
            grid.innerHTML = '<div class="searching-spinner"><i class="fa-solid fa-circle-notch fa-spin"></i> Geocoding hospital location and searching matches...</div>';

            const compatibleGroups = COMPATIBILITY_MAP[targetBloodGroup] || [];
            compMsg.textContent = `Patient with blood type ${targetBloodGroup} can receive from: ${compatibleGroups.join(', ')}`;

            // Geocode hospital if provided
            let targetCoords = TAMIL_NADU_DISTRICTS[targetCity];
            let exactHospitalGeocoded = false;
            if (targetHospital) {
                const hospitalCoords = await geocodeHospital(targetHospital, targetCity);
                if (hospitalCoords) {
                    targetCoords = { lat: hospitalCoords.lat, lng: hospitalCoords.lng };
                    exactHospitalGeocoded = true;
                    console.log("Geocoded hospital coordinates successfully:", targetCoords);
                } else {
                    console.log("Geocoding failed for hospital, falling back to district center.");
                }
            }

            let allDonors = [];
            if (isLiveApi) {
                try {
                    const response = await fetch(`${API_BASE_URL}/donors/match?bloodGroup=${encodeURIComponent(targetBloodGroup)}&city=${encodeURIComponent(targetCity)}&area=${encodeURIComponent(targetArea)}`);
                    if (response.ok) {
                        allDonors = await response.json();
                    } else {
                        const res = await fetch(`${API_BASE_URL}/donors`);
                        allDonors = await res.json();
                    }
                } catch (e) {
                    console.error("Live match API failed, running locally", e);
                    allDonors = mockDonors;
                }
            } else {
                allDonors = mockDonors;
            }
            
            let matches = allDonors.filter(d => {
                const group = d.bloodGroup || d.blood_group;
                const av = d.availability !== undefined ? d.availability : d.availability;
                
                if (!compatibleGroups.includes(group)) return false;
                if (!av) return false;
                
                return true;
            });

            matches = matches.map(d => {
                const dCity = d.city;
                let dCoords = null;

                // Check if donor has exact GPS coordinates
                if (d.latitude !== undefined && d.latitude !== null && d.latitude !== 0 &&
                    d.longitude !== undefined && d.longitude !== null && d.longitude !== 0) {
                    dCoords = { lat: d.latitude, lng: d.longitude };
                } else {
                    dCoords = TAMIL_NADU_DISTRICTS[dCity];
                }

                let dist = 999999;
                
                if (targetCoords && dCoords) {
                    dist = calculateHaversineDistance(
                        targetCoords.lat, targetCoords.lng,
                        dCoords.lat, dCoords.lng
                    );
                } else if (dCity === targetCity) {
                    dist = 0;
                }
                
                return { ...d, distance: dist };
            });

            // Sort: Exact City & Area first, then by distance
            matches.sort((a, b) => {
                const aCity = a.city;
                const bCity = b.city;
                const aArea = (a.area || '').toLowerCase();
                const bArea = (b.area || '').toLowerCase();

                if (aCity === targetCity && aArea === targetArea && (bCity !== targetCity || bArea !== targetArea)) return -1;
                if (bCity === targetCity && bArea === targetArea && (aCity !== targetCity || aArea !== targetArea)) return 1;

                if (aCity === targetCity && bCity !== targetCity) return -1;
                if (bCity === targetCity && aCity !== targetCity) return 1;

                return a.distance - b.distance;
            });

            grid.innerHTML = '';
            badge.textContent = `${matches.length} compatible donor(s) matching`;

            if (matches.length === 0) {
                grid.innerHTML = `
                    <div class="empty-state">
                        <i class="fa-solid fa-heart-crack"></i>
                        <h3>No Matching Donors</h3>
                        <p>No available donors of types (${compatibleGroups.join(', ')}) registered near ${targetCity}.</p>
                    </div>
                `;
                return;
            }

            matches.forEach(d => {
                const card = document.createElement('div');
                const dCity = d.city;
                const group = d.bloodGroup || d.blood_group;
                
                const hasDonorCoords = (d.latitude !== undefined && d.latitude !== null && d.latitude !== 0) &&
                                       (d.longitude !== undefined && d.longitude !== null && d.longitude !== 0);

                let distanceButtonText = '';
                if (dCity === targetCity) {
                    const targetAreaNormal = (d.area || '').toLowerCase();
                    if (targetAreaNormal === targetArea && targetArea) {
                        distanceButtonText = 'Same Area';
                    } else if (hasDonorCoords && exactHospitalGeocoded) {
                        distanceButtonText = `${d.distance.toFixed(1)} km (Exact GPS)`;
                    } else if (d.distance < 999999) {
                        distanceButtonText = `${Math.round(d.distance)} km`;
                    } else {
                        distanceButtonText = 'Same District';
                    }
                } else if (d.distance < 999999) {
                    if (hasDonorCoords && exactHospitalGeocoded) {
                        distanceButtonText = `${d.distance.toFixed(1)} km (Exact GPS)`;
                    } else {
                        distanceButtonText = `~${Math.round(d.distance)} km`;
                    }
                } else {
                    distanceButtonText = 'Other District';
                }

                const dateText = d.lastDonation || d.last_donation ? formatDate(d.lastDonation || d.last_donation) : 'Never';

                // Bilingual WhatsApp Message
                const waMsg = `Hello ${d.name}, we found your contact on BloodLink under matching donors for a recipient requiring ${targetBloodGroup} blood in ${targetCity}. Please help if available!\n\nவணக்கம் ${d.name}, BloodLink-ல் ${targetCity}-ல் ${targetBloodGroup} இரத்தம் தேவைப்படும் நோயாளிக்கு உங்களைப் பொருத்தமான நபராக கண்டறிந்தோம். உதவ முடிந்தால் தயவுசெய்து தொடர்பு கொள்ளவும்!`;
                const waUrl = `https://wa.me/91${d.phone}?text=${encodeURIComponent(waMsg)}`;

                // Generate Google Maps routing links
                let hospToDonorUrl = '';
                let donorToHospUrl = '';

                if (exactHospitalGeocoded && hasDonorCoords) {
                    hospToDonorUrl = `https://www.google.com/maps/dir/?api=1&origin=${targetCoords.lat},${targetCoords.lng}&destination=${d.latitude},${d.longitude}&travelmode=driving`;
                    donorToHospUrl = `https://www.google.com/maps/dir/?api=1&origin=${d.latitude},${d.longitude}&destination=${targetCoords.lat},${targetCoords.lng}&travelmode=driving`;
                } else {
                    const hospToDonorOrigin = `${targetHospital ? targetHospital + ', ' : ''}${targetArea ? targetArea + ', ' : ''}${targetCity}, Tamil Nadu`;
                    const hospToDonorDest = `${d.area ? d.area + ', ' : ''}${dCity}, Tamil Nadu`;
                    hospToDonorUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(hospToDonorOrigin)}&destination=${encodeURIComponent(hospToDonorDest)}&travelmode=driving`;

                    const donorToHospOrigin = `${d.area ? d.area + ', ' : ''}${dCity}, Tamil Nadu`;
                    const donorToHospDest = `${targetHospital ? targetHospital + ', ' : ''}${targetArea ? targetArea + ', ' : ''}${targetCity}, Tamil Nadu`;
                    donorToHospUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(donorToHospOrigin)}&destination=${encodeURIComponent(donorToHospDest)}&travelmode=driving`;
                }

                card.className = "donor-card glass-card matched-card animate-pop";
                card.innerHTML = `
                    <div class="donor-card-header">
                        <div class="donor-avatar">
                            <span>${group}</span>
                        </div>
                        <div class="donor-title">
                            <h4>${d.name}</h4>
                            <p><i class="fa-solid fa-location-dot"></i> ${d.area}, ${dCity}</p>
                            <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;"><i class="fa-solid fa-phone"></i> +91 ${d.phone}</p>
                        </div>
                    </div>
                    <div class="donor-details">
                        <p><strong>Last Donation:</strong> ${dateText}</p>
                        <p><strong>Bio:</strong> ${d.bio || 'No bio.'}</p>
                    </div>
                    <div class="donor-card-actions">
                        <a href="${hospToDonorUrl}" target="_blank" class="btn btn-distance flex-btn" title="View route from Hospital to Donor (For Requesters)">
                            <i class="fa-solid fa-route"></i> Hosp ➔ Donor (${distanceButtonText})
                        </a>
                        <a href="${donorToHospUrl}" target="_blank" class="btn btn-distance flex-btn" title="View route from Donor to Hospital (For Donors)">
                            <i class="fa-solid fa-route"></i> Donor ➔ Hosp (${distanceButtonText})
                        </a>
                        <a href="tel:+91${d.phone}" class="btn btn-call flex-btn">
                            <i class="fa-solid fa-phone"></i> Call
                        </a>
                        <a href="${waUrl}" target="_blank" class="btn btn-whatsapp flex-btn">
                            <i class="fa-brands fa-whatsapp"></i> WhatsApp
                        </a>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Haversine Distance Formula
        function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
            const R = 6371;
            const dLat = deg2rad(lat2 - lat1);
            const dLon = deg2rad(lon2 - lon1);
            const a = 
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
        }

        function deg2rad(deg) {
            return deg * (Math.PI / 180);
        }

        // Modal triggers for updating donor status
        function openEditModal(id, name, currentAvailability) {
            document.getElementById('editDonorId').value = id;
            document.getElementById('editDonorNameText').textContent = name;
            const checkbox = document.getElementById('editAvailability');
            checkbox.checked = currentAvailability;
            document.getElementById('editAvailabilityLabel').textContent = currentAvailability ? 'Available' : 'Not Available';
            
            document.getElementById('editDonorModal').classList.remove('hidden');
        }

        function closeEditModal() {
            document.getElementById('editDonorModal').classList.add('hidden');
        }

        async function handleEditDonorSubmit(event) {
            event.preventDefault();
            const id = parseInt(document.getElementById('editDonorId').value);
            const avail = document.getElementById('editAvailability').checked;
            
            let success = false;
            
            if (isLiveApi) {
                try {
                    const response = await fetch(`${API_BASE_URL}/donors/${id}/availability`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: `availability=${avail}`
                    });
                    if (response.ok) {
                        success = true;
                    }
                } catch (e) {
                    console.error("Live API availability update failed, running local backup", e);
                }
            }

            if (!success) {
                mockDonors = mockDonors.map(d => d.id === id ? { ...d, availability: avail } : d);
                localStorage.setItem('bloodlink_donors', JSON.stringify(mockDonors));
            }

            closeEditModal();
            showAlert('Donor availability status updated!', 'success');
            loadDonors();
        }

        // Interactive Compatibility view renderer
        function updateCompatibilityView() {
            const selector = document.getElementById('compatSelector');
            const selectedGroup = selector.value;
            if (!selectedGroup) return;

            document.getElementById('compatPrompt').classList.add('hidden');
            const results = document.getElementById('compatResults');
            results.classList.remove('hidden');

            const giveBadges = document.getElementById('canGiveBadges');
            const receiveBadges = document.getElementById('canReceiveBadges');
            const statusBox = document.getElementById('universalStatusBox');

            giveBadges.innerHTML = '';
            receiveBadges.innerHTML = '';
            statusBox.innerHTML = '';

            const CAN_GIVE_TO = {
                'O-': ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
                'O+': ['O+', 'A+', 'B+', 'AB+'],
                'A-': ['A-', 'A+', 'AB-', 'AB+'],
                'A+': ['A+', 'AB+'],
                'B-': ['B-', 'B+', 'AB-', 'AB+'],
                'B+': ['B+', 'AB+'],
                'AB-': ['AB-', 'AB+'],
                'AB+': ['AB+']
            };

            const CAN_RECEIVE_FROM = {
                'O-': ['O-'],
                'O+': ['O-', 'O+'],
                'A-': ['O-', 'A-'],
                'A+': ['O-', 'O+', 'A-', 'A+'],
                'B-': ['O-', 'B-'],
                'B+': ['O-', 'O+', 'B-', 'B+'],
                'AB-': ['O-', 'A-', 'B-', 'AB-'],
                'AB+': ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+']
            };

            const recipients = CAN_GIVE_TO[selectedGroup] || [];
            recipients.forEach(group => {
                const badge = document.createElement('span');
                badge.className = 'compat-badge';
                badge.textContent = group;
                giveBadges.appendChild(badge);
            });

            const donors = CAN_RECEIVE_FROM[selectedGroup] || [];
            donors.forEach(group => {
                const badge = document.createElement('span');
                badge.className = 'compat-badge';
                badge.textContent = group;
                receiveBadges.appendChild(badge);
            });

            if (selectedGroup === 'O-') {
                statusBox.innerHTML = '<i class="fa-solid fa-circle-check text-primary"></i> <strong>Universal Donor:</strong> O- blood can be given to patients of any blood type in emergencies.';
                statusBox.className = 'universal-status-box universal-donor';
            } else if (selectedGroup === 'AB+') {
                statusBox.innerHTML = '<i class="fa-solid fa-circle-check text-primary"></i> <strong>Universal Recipient:</strong> AB+ individuals can safely receive red blood cells from any blood type.';
                statusBox.className = 'universal-status-box universal-recipient';
            } else {
                statusBox.className = 'universal-status-box hidden';
            }
        }

        // Utility: Format Date string
        function formatDate(dateStr) {
            if (!dateStr) return 'Never';
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(dateStr).toLocaleDateString(undefined, options);
        }

        // Utility: Format Time Ago
        function formatTimeAgo(dateStr) {
            if (!dateStr) return '';
            const date = new Date(dateStr);
            const now = new Date();
            const diffMs = now - date;
            const diffMins = Math.floor(diffMs / 60000);
            
            if (diffMins < 1) return 'Just now';
            if (diffMins < 60) return `${diffMins} min ago`;
            
            const diffHours = Math.floor(diffMins / 60);
            if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
            
            const diffDays = Math.floor(diffHours / 24);
            return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
        }

        // Alert Banner
        function showAlert(message, type = 'info') {
            const banner = document.getElementById('alertBanner');
            const msgSpan = document.getElementById('alertMessage');
            banner.className = `alert-banner show ${type}`;
            msgSpan.textContent = message;
            
            setTimeout(() => {
                closeAlert();
            }, 4500);
        }

        function closeAlert() {
            const banner = document.getElementById('alertBanner');
            banner.className = 'alert-banner hidden';
        }

        // Mock Google Authentication
        let pendingGoogleAuthType = '';

        // Initialize Google Identity Services
        window.addEventListener('load', () => {
            if (window.google && google.accounts) {
                const clientId = "200358748645-usb9u4rgditk3ddtfnb4bg89nhsejq8b.apps.googleusercontent.com";
                
                google.accounts.id.initialize({
                    client_id: clientId,
                    callback: handleCredentialResponse,
                    cancel_on_tap_outside: false
                });

                // Render the official Google buttons in our modals
                const signupBtnContainer = document.getElementById('googleSignInBtnSignup');
                const loginBtnContainer = document.getElementById('googleSignInBtnLogin');
                
                if (signupBtnContainer) {
                    google.accounts.id.renderButton(
                        signupBtnContainer,
                        { theme: "outline", size: "large", width: 350 }
                    );
                }
                
                if (loginBtnContainer) {
                    google.accounts.id.renderButton(
                        loginBtnContainer,
                        { theme: "outline", size: "large", width: 350 }
                    );
                }
            }
        });

        async function handleCredentialResponse(response) {
            try {
                const responsePayload = decodeJwtResponse(response.credential);
                const email = responsePayload.email;
                
                // Hide modals while checking
                document.getElementById('donorSignUpModal').classList.add('hidden');
                document.getElementById('donorLoginModal').classList.add('hidden');
                
                // Check if user already exists
                let userExists = false;
                if (isLiveApi) {
                    try {
                        const checkRes = await fetch(`${API_BASE_URL}/donors/email/${encodeURIComponent(email)}`);
                        if (checkRes.ok) {
                            userExists = true;
                        }
                    } catch(e) {
                        console.error('API check failed', e);
                    }
                }
                
                if (!userExists) {
                    const localExists = (mockDonors || []).find(d => d.email === email);
                    if (localExists) {
                        userExists = true;
                    }
                }
                
                if (userExists) {
                    // Existing User: Login directly without OTP!
                    localStorage.setItem('donor_verified_email', email);
                    localStorage.setItem('has_registered', 'true');
                    
                    const targetTab = sessionStorage.getItem('post_auth_tab') || 'register';
                    sessionStorage.removeItem('post_auth_tab');
                    switchTab(targetTab);
                    
                    checkExistingDonorAndSetupForm(email);
                    showAlert('Logged in successfully via Google!', 'success');
                    updateAuthUI();
                } else {
                    // New User: Login directly without OTP!
                    localStorage.setItem('donor_verified_email', email);
                    
                    const emailInput = document.getElementById('donorEmail');
                    if (emailInput) {
                        emailInput.value = email;
                        emailInput.readOnly = true;
                        emailInput.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    }
                    
                    const targetTab = sessionStorage.getItem('post_auth_tab') || 'register';
                    sessionStorage.removeItem('post_auth_tab');
                    switchTab(targetTab);
                    
                    showAlert('Signed in with Google! Please complete your registration.', 'success');
                    updateAuthUI();
                }
            } catch (error) {
                console.error("Error decoding JWT or logging in:", error);
                showAlert("Google Sign-In failed: " + (error.message || error), "error");
            }
        }

        function decodeJwtResponse(token) {
            let base64Url = token.split('.')[1];
            let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            return JSON.parse(jsonPayload);
        }


    
