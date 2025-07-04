/**
 * Header component - Organism
 * Main application header with navigation and user menu
 */

import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  CalendarIcon,
  HomeIcon,
  CogIcon,
} from '@heroicons/react/24/outline';
import { Button } from '../atoms';
import { NavItem } from '../molecules';
import { useAuthContext } from '../../contexts';
import { APP_CONFIG } from '../../constants';

const navigation = [
  { name: 'Dashboard', to: '/', icon: HomeIcon },
  { name: 'Contests', to: '/contests', icon: CalendarIcon },
  { name: 'Settings', to: '/settings', icon: CogIcon },
];

/**
 * Header component
 */
const Header = () => {
  const { user, signOut } = useAuthContext();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleSignIn = () => {
    navigate('/login');
  };

  return (
    <Disclosure as="nav" className="bg-white shadow-sm border-b">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Logo and Desktop Navigation */}
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link
                    to="/"
                    className="flex items-center space-x-2"
                  >
                    <CalendarIcon className="h-8 w-8 text-blue-600" />
                    <span className="text-xl font-bold text-gray-900">
                      {APP_CONFIG.APP_NAME}
                    </span>
                  </Link>
                </div>

                {/* Desktop Navigation */}
                {user && (
                  <div className="hidden sm:ml-8 sm:flex sm:space-x-1">
                    {navigation.map((item) => (
                      <NavItem
                        key={item.name}
                        to={item.to}
                        icon={item.icon}
                        label={item.name}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Desktop User Menu */}
              <div className="hidden sm:flex sm:items-center sm:space-x-4">
                {user ? (
                  <Menu as="div" className="relative">
                    <Menu.Button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                      {user.photoURL ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.photoURL}
                          alt={user.displayName || user.email}
                        />
                      ) : (
                        <UserCircleIcon className="h-8 w-8 text-gray-400" />
                      )}
                    </Menu.Button>
                    
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-900">
                            {user.displayName || 'User'}
                          </p>
                          <p className="text-sm text-gray-600 truncate">
                            {user.email}
                          </p>
                        </div>
                        
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/settings"
                              className={`${
                                active ? 'bg-gray-100' : ''
                              } block px-4 py-2 text-sm text-gray-700`}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={handleSignOut}
                              className={`${
                                active ? 'bg-gray-100' : ''
                              } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <Button onClick={handleSignIn}>
                    Sign In
                  </Button>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden flex items-center">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50">
              {user ? (
                <>
                  {navigation.map((item) => (
                    <NavItem
                      key={item.name}
                      to={item.to}
                      icon={item.icon}
                      label={item.name}
                      mobile
                    />
                  ))}
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex items-center px-3 mb-3">
                      {user.photoURL ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.photoURL}
                          alt={user.displayName || user.email}
                        />
                      ) : (
                        <UserCircleIcon className="h-8 w-8 text-gray-400" />
                      )}
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {user.displayName || 'User'}
                        </p>
                        <p className="text-sm text-gray-600">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
                    >
                      Sign out
                    </button>
                  </div>
                </>
              ) : (
                <div className="px-3 py-2">
                  <Button onClick={handleSignIn} className="w-full">
                    Sign In
                  </Button>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
