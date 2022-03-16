using StoreManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StoreManagement.Repository
{
    public class CustomerRepository : ICustomerRepository, IDisposable
    {
        private readonly StoreManagementDbContext _context;
        public CustomerRepository(StoreManagementDbContext context)
        {
            _context = context;
        }
        public void CreateNewCustomer(Customer customer)
        {
            _context.Customers.Add(customer);
        }

        public void DeleteCustomer(int id)
        {
            Customer customer = _context.Customers.Find(id);
            _context.Customers.Remove(customer);
        }
        public IEnumerable<Customer> GetAllCustomer()
        {
            return _context.Customers.ToList();
        }

        public Customer GetByIDCustomer(int id)
        {
            return _context.Customers.Find(id);
        }

        public void UpdateCustomer(Customer customer)
        {
            _context.Entry(customer).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
        private bool disposed = false;
        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
