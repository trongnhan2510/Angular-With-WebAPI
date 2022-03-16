﻿using StoreManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StoreManagement.Repository
{
    public interface ICustomerRepository
    {
        IEnumerable<Customer> GetAllCustomer();
        void CreateNewCustomer(Customer customer);
        Customer GetByIDCustomer(int id);
        void UpdateCustomer(Customer customer);
        void DeleteCustomer(int id);
        IEnumerable<Customer> GetCustomersByName(string name);
    }
}
