const redirectUrl = () => {
    const redirectUri = 'https://99c7-103-240-208-87.in.ngrok.io/authorized';
    return `https://a1a8c6b9736bf8.lhr.life/oauth2/authorize?response_type=code&client_id=user-client&scope=user.write&redirect_uri=${redirectUri}`;
}

// GET http://localhost:8080/oauth2/authorize?response_type=code&client_id=user-client&scope=user.write&redirect_uri=http%3A%2F%2F127.0.0.1%3A8080%2Flogin%2Foauth2%2Fcode%2Fuser-client-oidc


export default redirectUrl;