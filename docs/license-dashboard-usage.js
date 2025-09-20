// Simple API usage example for License Dashboard

// 1. Get all licenses with stats
const getLicenses = async (page = 1, status = '', search = '') => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: '20',
    ...(status && { status }),
    ...(search && { search })
  });

  try {
    const response = await fetch(`/api/admin/licenses?${params}`);
    const data = await response.json();

    console.log('Licenses:', data.licenses);
    console.log('Stats:', data.stats);
    console.log('Pagination:', data.pagination);

    return data;
  } catch (error) {
    console.error('Error fetching licenses:', error);
    return null;
  }
};

// 2. Get specific license details
const getLicenseDetails = async (licenseId) => {
  try {
    const response = await fetch(`/api/admin/licenses/${licenseId}`);
    const data = await response.json();

    console.log('License Details:', data.license);
    console.log('Activation Stats:', data.activationStats);

    return data;
  } catch (error) {
    console.error('Error fetching license details:', error);
    return null;
  }
};

// 3. Update license status
const updateLicenseStatus = async (licenseId, newStatus, notes = '') => {
  try {
    const response = await fetch(`/api/admin/licenses/${licenseId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        licenseStatus: newStatus,
        notes
      })
    });

    const data = await response.json();

    if (data.success) {
      console.log('License updated successfully');
      return true;
    } else {
      console.error('Failed to update license:', data.error);
      return false;
    }
  } catch (error) {
    console.error('Error updating license:', error);
    return false;
  }
};

// 4. Example usage
const exampleUsage = async () => {
  // Get all active licenses
  const activeLicenses = await getLicenses(1, 'active');

  // Search for specific customer
  const searchResults = await getLicenses(1, '', 'john@example.com');

  // Get details for a specific license
  if (activeLicenses?.licenses?.length > 0) {
    const licenseId = activeLicenses.licenses[0].id;
    const details = await getLicenseDetails(licenseId);

    // Update license status
    await updateLicenseStatus(
      licenseId,
      'revoked',
      'Revoked for policy violation'
    );
  }
};

// 5. Dashboard Data Structure
const dashboardData = {
  licenses: [
    {
      id: 'purchase-id',
      email: 'customer@example.com',
      customerName: 'John Doe',
      amount: 4900, // $49.00 in cents
      currency: 'usd',
      stripeSessionId: 'cs_xxx',
      stripePaymentId: 'pi_xxx',
      status: 'completed',
      licenseKey: 'NTCB-XXXX-XXXX-XXXX-XXXX-XXXX',
      licenseStatus: 'active',
      activatedAt: '2024-01-15T10:30:00Z',
      activatedEmail: 'customer@example.com',
      systemFingerprint: 'abc123def456...',
      processorId: 'cpu-12345',
      activationAttempts: 1,
      maxActivationAttempts: 3,
      downloadCount: 2,
      maxDownloads: 5,
      createdAt: '2024-01-15T09:00:00Z',
      updatedAt: '2024-01-15T10:30:00Z',
      expiresAt: '2024-01-22T09:00:00Z',
      activations: [
        {
          id: 'activation-id',
          status: 'success',
          ipAddress: '192.168.1.100',
          userAgent: 'Mozilla/5.0...',
          createdAt: '2024-01-15T10:30:00Z',
          errorMessage: null
        }
      ]
    }
  ],
  stats: {
    totalLicenses: 150,
    totalRevenue: 735000, // $7,350.00 in cents
    statusBreakdown: {
      active: 120,
      inactive: 25,
      revoked: 5
    }
  },
  pagination: {
    page: 1,
    limit: 20,
    total: 150,
    totalPages: 8
  }
};

// 6. Simple HTML Dashboard (for quick testing)
const createSimpleDashboard = () => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>License Dashboard</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .stats { display: flex; gap: 20px; margin-bottom: 20px; }
        .stat-card { background: #f5f5f5; padding: 20px; border-radius: 8px; }
        .license-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        .license-table th, .license-table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        .license-table th { background-color: #f2f2f2; }
        .status-active { background: #d4edda; color: #155724; padding: 4px 8px; border-radius: 4px; }
        .status-inactive { background: #fff3cd; color: #856404; padding: 4px 8px; border-radius: 4px; }
        .status-revoked { background: #f8d7da; color: #721c24; padding: 4px 8px; border-radius: 4px; }
        .search-box { margin-bottom: 20px; }
        .search-box input, .search-box select { padding: 8px; margin-right: 10px; }
        .btn { padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
        .btn:hover { background: #0056b3; }
        .btn-danger { background: #dc3545; }
        .btn-danger:hover { background: #c82333; }
      </style>
    </head>
    <body>
      <h1>NTClipboard License Dashboard</h1>
      
      <div class="stats">
        <div class="stat-card">
          <h3>Total Licenses</h3>
          <p id="total-licenses">0</p>
        </div>
        <div class="stat-card">
          <h3>Total Revenue</h3>
          <p id="total-revenue">$0.00</p>
        </div>
        <div class="stat-card">
          <h3>Active Licenses</h3>
          <p id="active-licenses">0</p>
        </div>
        <div class="stat-card">
          <h3>Inactive Licenses</h3>
          <p id="inactive-licenses">0</p>
        </div>
      </div>
      
      <div class="search-box">
        <input type="text" id="search-input" placeholder="Search by email or name...">
        <select id="status-filter">
          <option value="">All Statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="revoked">Revoked</option>
        </select>
        <button class="btn" onclick="searchLicenses()">Search</button>
      </div>
      
      <table class="license-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Email</th>
            <th>License Key</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Purchase Date</th>
            <th>Activated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="license-table-body">
          <!-- Data will be populated by JavaScript -->
        </tbody>
      </table>
      
      <script>
        let currentPage = 1;
        
        async function loadLicenses() {
          const search = document.getElementById('search-input').value;
          const status = document.getElementById('status-filter').value;
          
          const data = await getLicenses(currentPage, status, search);
          if (data) {
            updateStats(data.stats);
            updateTable(data.licenses);
          }
        }
        
        function updateStats(stats) {
          document.getElementById('total-licenses').textContent = stats.totalLicenses;
          document.getElementById('total-revenue').textContent = '$' + (stats.totalRevenue / 100).toFixed(2);
          document.getElementById('active-licenses').textContent = stats.statusBreakdown.active || 0;
          document.getElementById('inactive-licenses').textContent = stats.statusBreakdown.inactive || 0;
        }
        
        function updateTable(licenses) {
          const tbody = document.getElementById('license-table-body');
          tbody.innerHTML = '';
          
          licenses.forEach(license => {
            const row = document.createElement('tr');
            row.innerHTML = \`
              <td>\${license.customerName}</td>
              <td>\${license.email}</td>
              <td>\${license.licenseKey ? license.licenseKey.substring(0, 20) + '...' : 'Not generated'}</td>
              <td><span class="status-\${license.licenseStatus}">\${license.licenseStatus}</span></td>
              <td>$\${(license.amount / 100).toFixed(2)}</td>
              <td>\${new Date(license.createdAt).toLocaleDateString()}</td>
              <td>\${license.activatedAt ? new Date(license.activatedAt).toLocaleDateString() : 'Not activated'}</td>
              <td>
                <button class="btn" onclick="viewDetails('\${license.id}')">Details</button>
                <button class="btn btn-danger" onclick="revokeLicense('\${license.id}')">Revoke</button>
              </td>
            \`;
            tbody.appendChild(row);
          });
        }
        
        function searchLicenses() {
          currentPage = 1;
          loadLicenses();
        }
        
        async function viewDetails(licenseId) {
          const details = await getLicenseDetails(licenseId);
          if (details) {
            alert('License Details:\\n' + JSON.stringify(details, null, 2));
          }
        }
        
        async function revokeLicense(licenseId) {
          if (confirm('Are you sure you want to revoke this license?')) {
            const success = await updateLicenseStatus(licenseId, 'revoked', 'Revoked by admin');
            if (success) {
              loadLicenses(); // Refresh the table
              alert('License revoked successfully');
            }
          }
        }
        
        // Load initial data
        loadLicenses();
      </script>
    </body>
    </html>
  `;
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getLicenses,
    getLicenseDetails,
    updateLicenseStatus,
    exampleUsage,
    createSimpleDashboard
  };
}
