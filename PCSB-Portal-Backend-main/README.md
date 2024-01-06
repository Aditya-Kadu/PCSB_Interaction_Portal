# PCSB Interactive Portal Backend

## Backend URL : https://13.233.17.93:9090

# API Usage

## 1. Registration

### 1.1. Register a new member

#### URL

```http
POST /api/register
```

#### Body

```json
multipart/form-data

{
  "name": "Name", // Required
  "email": "email", // Required
  "password": "12345678", // Required
  "description": "Description of the member",
  "phone": "Phone Number",
  "github": "Github URL",
  "additionalLinks": {
    "Link for": "Link URL",
    "Portfolio": "Portfolio URL"
  },
  "expertise": {
    "Domain": ["Expertise 1", "Expertise 2"],
    "Web Development": ["MERN", "Flask"],
    "App Development": ["Flutter"]
  }
}

+ image: File
```

#### Response

```json
// If successful
{
  "message": "Registration OTP sent successfully."
}

// If unsuccessful
{
  "message": "Particular error message"
}
```

### 1.2 Verify a user

#### URL

```http
POST /api/register/verify
```

#### Body

```json
{
  "email": "email", // Required
  "otp": "123456" // Required
}
```

#### Response

```json
// If successful
{
  "message": "Member verified successfully.",
  "member": {
    "id": "id",
    "name": "Name",
    "email": "email",
    "image": "Image URL",
    "isCoreMember": true/false (Based on the db of emails),
    "description": "Description of the member",
    "phone": "Phone Number",
    "github": "Github URL",
    "additionalLinks": {
      "Link for": "Link URL",
      "Portfolio": "Portfolio URL"
    },
    "expertise": {
      "Domain": ["Expertise 1", "Expertise 2"],
      "Web Development": ["MERN", "Flask"],
      "App Development": ["Flutter"]
    }
  }
}

// If unsuccessful
{
  "message": "Particular error message"
}

```

### 1.3. Update a member

#### URL

```http
PUT /api/register
```

#### Body

```json
multipart/form-data

{
  "name": "Name", // Required
  "email": "email", // Required
  "password": "12345678", // Required
  "description": "Description of the member",
  "phone": "Phone Number",
  "github": "Github URL",
  "additionalLinks": {
    "Link for": "Link URL",
    "Portfolio": "Portfolio URL"
  },
  "expertise": {
    "Domain": ["Expertise 1", "Expertise 2"],
    "Web Development": ["MERN", "Flask"],
    "App Development": ["Flutter"]
  }
}

+ image: File
```

#### Response

```json
// If successful
{
  "message": "Member updated successfully.",
  "member": {
    "id": "id",
    "name": "Name",
    "email": "email",
    "image": "Image URL",
    "isCoreMember": true/false (Based on the db of emails),
    "description": "Description of the member",
    "phone": "Phone Number",
    "github": "Github URL",
    "additionalLinks": {
      "Link for": "Link URL",
      "Portfolio": "Portfolio URL"
    },
    "expertise": {
      "Domain": ["Expertise 1", "Expertise 2"],
      "Web Development": ["MERN", "Flask"],
      "App Development": ["Flutter"]
    }
  }
}

// If unsuccessful
{
  "message": "Particular error message"
}
```

## 2. Login

### 2.1. Login a member

#### URL

```http
POST /api/login
```

#### Body

```json
{
  "email": "email", // Required
  "password": "12345678" // Required
}
```

#### Response

```json
// If successful
{
  "message": "Member logged in successfully.",
  "member": {
    "id": "id",
    "name": "Name",
    "email": "email",
    "image": "Image URL",
    "isCoreMember": true/false (Based on the db of emails),
    "description": "Description of the member",
    "phone": "Phone Number",
    "github": "Github URL",
    "additionalLinks": {
      "Link for": "Link URL",
      "Portfolio": "Portfolio URL"
    },
    "expertise": {
      "Domain": ["Expertise 1", "Expertise 2"],
      "Web Development": ["MERN", "Flask"],
      "App Development": ["Flutter"]
    }
  }
}

// If unsuccessful
{
  "message": "Particular error message"
}
```

### 2.2. Forgot Password

#### URL

```http
POST /api/forgot-password
```

#### Body

```json
{
  "email": "email" // Required
}
```

#### Response

```json
// If successful
{
  "message": "Forgot password OTP sent successfully."
}

// If unsuccessful
{
  "message": "Particular error message"
}
```

### 2.3. Verify Forgot Password OTP

#### URL

```http
POST /api/forgot-password/verify
```

#### Body

```json
{
  "email": "email", // Required
  "otp": "123456" // Required
}
```

#### Response

```json
// If successful
{
  "message": "OTP verified successfully."
}

// If unsuccessful
{
  "message": "Particular error message"
}
```

### 2.4. Reset Password

#### URL

```http
POST /api/forgot-password/reset
```

#### Body

```json
{
  "email": "email", // Required
  "otp": "123456", // Required
  "password": "new password" // Required
}
```

#### Response

```json
// If successful
{
  "message": "Password reset successfully."
}

// If unsuccessful
{
  "message": "Particular error message"
}
```

## 3. Get Member Details

```http
GET /api/search/member/:id
```

#### Response

```json
// If successful
{
  "message": "Member found successfully.",
  "member": {
    "id": "id",
    "name": "Name",
    "email": "email",
    "image": "Image URL",
    "isCoreMember": true/false (Based on the db of emails),
    "description": "Description of the member",
    "phone": "Phone Number",
    "github": "Github URL",
    "additionalLinks": {
      "Link for": "Link URL",
      "Portfolio": "Portfolio URL"
    },
    "expertise": {
      "Domain": ["Expertise 1", "Expertise 2"],
      "Web Development": ["MERN", "Flask"],
      "App Development": ["Flutter"]
    }
  }
}

// If unsuccessful
{
  "message": "Particular error message"
}
```

## 4. Search

### 4.1. Search for members by name

#### URL

```http
GET /api/search?name=Name
```

#### Response

```json
// If successful
{
  "message": "Members found successfully.",
  "members": [
    {
      "id": "id",
      "name": "Name",
      "email": "email",
      "image": "Image URL",
      "isCoreMember": true/false (Based on the db of emails),
    },
    {
      "id": "id",
      "name": "Name",
      "email": "email",
      "image": "Image URL",
      "isCoreMember": true/false (Based on the db of emails),
    }
  ]
}

// If unsuccessful
{
  "message": "Particular error message"
}
```

### 4.2. Search for members by domain

#### URL

```http
GET /api/search?domain=Domain
```

#### Response

```json
// If successful
{
  "message": "Members found successfully.",
  "members": [
    {
      "id": "id",
      "name": "Name",
      "email": "email",
      "image": "Image URL",
      "isCoreMember": true/false (Based on the db of emails),
    },
    {
      "id": "id",
      "name": "Name",
      "email": "email",
      "image": "Image URL",
      "isCoreMember": true/false (Based on the db of emails),
    }
  ]
}

// If unsuccessful
{
  "message": "Particular error message"
}
```

### 4.3. Search for members by expertise

#### URL

```http
GET /api/search?expertise=Expertise
```

#### Response

```json
// If successful
{
  "message": "Members found successfully.",
  "members": [
    {
      "id": "id",
      "name": "Name",
      "email": "email",
      "image": "Image URL",
      "isCoreMember": true/false (Based on the db of emails),
    },
    {
      "id": "id",
      "name": "Name",
      "email": "email",
      "image": "Image URL",
      "isCoreMember": true/false (Based on the db of emails),
    }
  ]
}

// If unsuccessful
{
  "message": "Particular error message"
}
```

### 4.4. Search for members by any combination of the above

#### URL

```http
GET /api/search?name=Name&domain=Domain&expertise=Expertise
```

#### Response

```json
// If successful
{
  "message": "Members found successfully.",
  "members": [
    {
      "id": "id",
      "name": "Name",
      "email": "email",
      "image": "Image URL",
      "isCoreMember": true/false (Based on the db of emails),
    },
    {
      "id": "id",
      "name": "Name",
      "email": "email",
      "image": "Image URL",
      "isCoreMember": true/false (Based on the db of emails),
    }
  ]
}

// If unsuccessful
{
  "message": "Particular error message"
}
```

## 5. Domains

### Get all domains

```http
GET /api/domains
```

#### Response

```json
// If successful
{
  "message": "Domains found successfully.",
  "domains": [
    {
      "id": "id",
      "name": "Domain Name",
      "expertise": ["Expertise 1", "Expertise 2"]
    },
    {
      "id": "id",
      "name": "Domain Name",
      "expertise": ["Expertise 1", "Expertise 2"]
    }
  ]
}

// If unsuccessful
{
  "message": "Particular error message"
}
```
