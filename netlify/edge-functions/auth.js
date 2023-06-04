import {Authenticator} from "https://unpkg.com/netlify-auth-providers"

export default () => {
    const authenticator = new Authenticator()
    authenticator.authenticate(
        // Set the OAuth provider and token scope
        // Provider can be "github", "gitlab", or "bitbucket"
        // The scopes available depend on your OAuth provider
        { provider: "github", scope: "user" },
        async function (error, data) {
            if (error) {
                return new Response("Error Authenticating with GitHub: " + error)
            } else {
                let responseString = "Authenticated with GitHub. Access Token: " + data.token
                responseString += "\n"
                responseString += await loadGitHubUserEmails(data.token);
                return new Response(responseString)
            }
        }
    );
};

export const config = { path: "/auth" };
