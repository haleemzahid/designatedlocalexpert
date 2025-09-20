// Types for customer data
export interface Customer {
  id: string;
  name: string;
  email: string;
  paymentDate: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed';
  installerStatus: 'sent' | 'pending' | 'failed';
  customerType: string;
  stripeCustomerId?: string;
  stripePaymentIntentId?: string;
}

export interface DashboardStats {
  totalRevenue: number;
  totalCustomers: number;
  installersSent: number;
  monthlyRevenue: number;
  revenueGrowth: number;
  customerGrowth: number;
  deliveryRate: number;
}

// API functions (to be implemented with your backend)
export async function getDashboardStats(): Promise<DashboardStats> {
  // Replace with actual API call
  return {
    totalRevenue: 12250,
    totalCustomers: 250,
    installersSent: 238,
    monthlyRevenue: 2450,
    revenueGrowth: 8.2,
    customerGrowth: 15,
    deliveryRate: 95.2
  };
}

export async function getCustomers(
  page = 1,
  limit = 50,
  search = ''
): Promise<{
  customers: Customer[];
  total: number;
  page: number;
  totalPages: number;
}> {
  // Replace with actual API call
  const mockCustomers: Customer[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@company.com',
      paymentDate: 'Dec 15, 2024',
      amount: 49,
      status: 'paid',
      installerStatus: 'sent',
      customerType: 'Premium Customer'
    },
    {
      id: '2',
      name: 'Sarah Miller',
      email: 'sarah.m@techcorp.com',
      paymentDate: 'Dec 14, 2024',
      amount: 49,
      status: 'paid',
      installerStatus: 'sent',
      customerType: 'New Customer'
    }
    // ... more mock data
  ];

  return {
    customers: mockCustomers,
    total: 250,
    page: 1,
    totalPages: 50
  };
}

export async function sendInstallerEmail(customerId: string): Promise<boolean> {
  // Replace with actual API call to send installer
  try {
    const response = await fetch('/api/send-installer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customerId })
    });
    return response.ok;
  } catch (error) {
    console.error('Error sending installer:', error);
    return false;
  }
}

export async function updateInstallerStatus(
  customerId: string,
  status: 'sent' | 'pending' | 'failed'
): Promise<boolean> {
  // Replace with actual API call
  try {
    const response = await fetch('/api/update-installer-status', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customerId, status })
    });
    return response.ok;
  } catch (error) {
    console.error('Error updating installer status:', error);
    return false;
  }
}
