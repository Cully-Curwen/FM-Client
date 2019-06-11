import gql from 'graphql-tag';

export const CUSTOMER_REGISTER_MUTATION = gql`
  mutation customerRegister(
    $email: String!, 
    $firstName: String!, 
    $lastName: String!, 
    $password: String!
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
`;

export const CUSTOMER_LOGIN_MUTATION = gql`
  mutation customerLogin($email: String!, $password: String!) {
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
`;

export const CUSTOMER_UPDATE_MUTATION = gql`
  mutation customerUpdate(
    $email: String, 
    $firstName: String, 
    $lastName: String, 
    $password: String!, 
    $newPassword: String
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
`;

export const MARKET_ADMIN_REGISTER_MUTATION = gql`
  mutation marketAdminRegister(
    $email: String!, 
    $firstName: String!, 
    $lastName: String!, 
    $password: String!
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
`;

export const MARKET_ADMIN_LOGIN_MUTATION = gql`
  mutation marketAdminLogin( $email: String!, $password: String! ) {
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
`;

export const MARKET_ADMIN_UPDATE_MUTATION = gql`
  mutation marketAdminUpdate(
    $email: String!, 
    $firstName: String!, 
    $lastName: String!, 
    $password: String!,
    $newPassword: String!,
  ) {
    id
    email
    firstName
    lastName
  }
`;

export const TRADER_ADMIN_REGISTER_MUTATION = gql`
  mutation traderAdminRegister(
    $email: String!, 
    $firstName: String!, 
    $lastName: String!, 
    $password: String!
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
`;

export const TRADER_ADMIN_LOGIN_MUTATION = gql`
  mutation traderAdminLogin($email: String!, $password: String!) {
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
`;

export const TRADER_ADMIN_UPDATE_MUTATION = gql`
  mutation traderAdminUpdate(
    $email: String, 
    $firstName: String, 
    $lastName: String, 
    $password: String!, 
    $newPassword: String
  ) {
    id
    email
    firstName
    lastName
  }
`;