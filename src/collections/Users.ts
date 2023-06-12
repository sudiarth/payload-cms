import { Access } from 'payload/config';
import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',

  // any collection can have auth enabled, and may have more than one
  // by enabling auth, the API adds more routes for api/users like /login, /forgot-password, and more
  // here we configure auth settings in an object, instead use "auth: true" to accept all defaults
  auth: {
    // useAPIKey will add a generated token visible to the user in the admin UI that can then be used to make API requests
    useAPIKey: true,
  },
  admin: {
    useAsTitle: 'email',
    group: 'Admin',
  },
  access: {
    // allow all get requests to /api/users or the equivalent graphQL query
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  // auth enabled collections get email and other fields for secure authentication in addition to the fields you add
  fields: [
    {
      name: 'name',
      type: 'text',
      // saveToJWT tells Payload to include the field data to the JSON web token used to authenticate users
      saveToJWT: true,
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      required: true,
      defaultValue: 'user',
    },
  ],
};

export default Users;
