<a name="readme-top"></a>


<div align="center">
    <h1 align="center">Sinulid at Kawit</h1>
    <img src="./frontend/public/logo.png" alt="ecommerce-web-logo" width='100' />
    <p align="center">
        An e-commerce website for crocheted bags.
        <br />
        <em>A final project for COSC-FE (E-Commerce).</em>
    </p>
</div>


## About the project

This e-commerce website is our final project for our course COSC-FE (E-commerce), a culmination of what we have learned about

* Marketing and sales,
* Business models,
* Security,
* Website optimization, etc.


## Built with

<table>
    <tr>
        <th colspan="2">Backend</th>
        <th>Frontend</th>
    </tr>
    <tr>
        <td>Database</td>
        <td>Server</td>
        <td>UI Framework</td>
    </tr>
    <tr>
        <td>
            <img src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' alt='MongoDB'>
        </td>
        <td>
            <img src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' alt='Express.js'>
            <img src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' alt='Node.js'>
        </td>
        <td>
            <img src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' alt='React.js'>
        </td>
    </tr>
</table>

## Getting started

Get a local copy up and running by cloning the repository and following the installation steps
```bash
git clone https://github.com/dattlab/ecommerce-web.git
```

### Prerequisites

- Node.js
- `npm`

### Installation

1. Go to the cloned directory and install the dependencies

   ```bash
   cd ecommerce-web
   npm install
   ```

2. You also need to go to `frontend` folder to install the separated dependencies there

   ```bash
   cd frontend
   npm install
   ```

3. Rename `.env.example` to `.env` and change their values
   * `NODE_ENV` - may contain `development` or `production`
   * `PORT` - server port
   * `MONGO_URI` - connection to your MongoDB instance (more info [here](https://www.mongodb.com/docs/manual/reference/connection-string/))
   * `PAYPAL_CLIENT_ID` - you can get your PayPal client ID by following this [guide](https://www.appinvoice.com/en/s/documentation/how-to-get-paypal-client-id-and-secret-key-22)
   * Lastly, you can assign any value for `JWT_SECRET` and `PAGINATION_LIMIT`.

## Usage

### Running in local server

To run both the backend and frontend, run

```bash
npm run dev
```

To run frontend and backend separately

```bash
npm run server  # for backend
npm run client  # for frontend
```

To build and deploy:
```bash
npm run build
```

## License

Distributed under the MIT License. See `LICENSE` for more information.


