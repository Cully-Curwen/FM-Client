import gql from 'graphql-tag';

export const CUSTOMER_REGISTER_MUTATION = gql`
  mutation customerRegister(
    $email: String!, 
    $firstName: String!, 
    $lastName: String!, 
    $password: String!
  ) {
    customerRegister(
      email: $email, 
      firstName: $firstName, 
      lastName: $lastName, 
      password: $password
    ) {
      token
      customer {
        id
        email
        firstName
        lastName
        shoppingCarts {
          market {
            id
            name
          }
          items {
            traderCardId
            itemId
            name
            description
            price
            quantity
          }
        }
      }
    }
  }
`;

export const CUSTOMER_LOGIN_MUTATION = gql`
  mutation customerLogin($email: String!, $password: String!) {
    customerLogin(email: $email, password: $password) {
      token
      customer {
        id
        email
        firstName
        lastName
        shoppingCarts {
          market {
            id
            name
          }
          items {
            traderCardId
            itemId
            name
            description
            price
            quantity
          }
        }
      }
    }
  }
`;

export const CUSTOMER_UPDATE_MUTATION = gql`
  mutation customerUpdate(
    $email: String, 
    $firstName: String, 
    $lastName: String, 
    $password: String!, 
    $newPassword: String
  ) {
    customerUpdate(
      email: $email,
      firstName: $firstName,
      lastName: $lastName,
      password: $password,
      newPassword: $newPassword,
    ) {
      id
      email
      firstName
      lastName
      shoppingCarts {
        market {
          id
          name
        }
        items {
          traderCardId
          itemId
          name
          description
          price
          quantity
        }
      }
    }
  }
`;

export const MARKET_ADMIN_REGISTER_MUTATION = gql`
  mutation marketAdminRegister(
    $email: String!, 
    $firstName: String!, 
    $lastName: String!, 
    $password: String!
  ) {
    marketAdminRegister(
      email: $email, 
      firstName: $firstName, 
      lastName: $lastName, 
      password: $password
    ) {
      token
      marketAdmin {
        id
        email
        firstName
        lastName
      }
      markets {
        id
        admins
        name
        blurb
        address
        geoLocation {
          coordinates
        }
        directions
        imgUrl
        openHours {
          openTime
          closeTime
          tradingDay
        }
        traders {
          id
          name
          blurb
        }
      }
    }
  }
`;

export const MARKET_ADMIN_LOGIN_MUTATION = gql`
  mutation marketAdminLogin( $email: String!, $password: String! ) {
    marketAdminLogin(email: $email, password: $password) {
      token
      marketAdmin {
        id
        email
        firstName
        lastName
      }
      markets {
        id
        admins
        name
        blurb
        address
        geoLocation {
          coordinates
        }
        directions
        imgUrl
        openHours {
          openTime
          closeTime
          tradingDay
        }
        traders {
          id
          name
          blurb
        }
      }
    }
  }
`;

export const MARKET_ADMIN_UPDATE_MUTATION = gql`
  mutation marketAdminUpdate(
    $email: String!, 
    $firstName: String!, 
    $lastName: String!, 
    $password: String!,
    $newPassword: String!,
  ) {
    marketAdminUpdate(
      email: $email,
      firstName: $firstName,
      lastName: $lastName,
      password: $password,
      newPassword: $newPassword,
    ) {
      id
      email
      firstName
      lastName
    }
  }
`;

export const TRADER_ADMIN_REGISTER_MUTATION = gql`
  mutation traderAdminRegister(
    $email: String!, 
    $firstName: String!, 
    $lastName: String!, 
    $password: String!
  ) {
    traderAdminRegister(
      email: $email, 
      firstName: $firstName, 
      lastName: $lastName, 
      password: $password
    ) {
      token
      traderAdmin {
        id
        email
        firstName
        lastName
      }
      traderCards {
        id
        admins
        name
        blurb
        imgUrl
        links {
          website
        }
        produceTags
        inventory {
          id
          name
          description
          stock
          price
        }
      }
    }
  }
`;

export const TRADER_ADMIN_LOGIN_MUTATION = gql`
  mutation traderAdminLogin($email: String!, $password: String!) {
    traderAdminLogin(email: $email, password: $password) {
      token
      traderAdmin {
        id
        email
        firstName
        lastName
      }
      traderCards {
        id
        admins
        name
        blurb
        imgUrl
        links {
          website
        }
        produceTags
        inventory {
          id
          name
          description
          stock
          price
        }
      }
    }
  }
`;

export const TRADER_ADMIN_UPDATE_MUTATION = gql`
  mutation traderAdminUpdate(
    $email: String, 
    $firstName: String, 
    $lastName: String, 
    $password: String!, 
    $newPassword: String
  ) {
    traderAdminUpdate(
      email: $email,
      firstName: $firstName,
      lastName: $lastName,
      password: $password,
      newPassword: $newPassword,
    ) {
      id
      email
      firstName
      lastName
    }
  }
`;