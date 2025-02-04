import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *  static token;
 * // for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
 */

    class JoblyApi {
      // the token for interactive with the API will be stored here.
      static token;
    
      static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);
    
        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${JoblyApi.token}` };
        const params = (method === "get")
            ? data
            : {};
    
        try {
          return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
          console.error("API Error:", err.response);
          let message = err.response.data.error.message;
          throw Array.isArray(message) ? message : [message];
        }
      }
    
      // Individual API routes
    
      /** Get the current user. */
    
      static async getCurrentUser(username) {
        let res = await this.request(`users/${username}`);
        return res.user;
      }
    
      /** Get companies (filtered by name if not undefined) */
    
      static async getCompanies() {
        let res = await this.request("companies");
        return res.companies;
      }
    
      /** Get details on a company by handle. */

      static async getCompany(handle) {
        let res = await this.request(`companies/${handle}`);
        return res.company;
      }
    
      static async getCompaniesWithQuery(handle) {
        let res = await this.request(`companies/?name=${handle}`);
        return res.company;
      }
    
      static async getJobs() {
        let res = await this.request(`jobs`);
        return res.jobs;
      }

      /** Get list of jobs (filtered by title if not undefined) */

    
      /** Apply to a job */
    
      static async applyToJob(username, id) {
        await this.request(`users/${username}/jobs/${id}`, {}, "post");
      }
    
      /** Get token for login from username, password. */
    
      static async login(data) {
        let res = await this.request(`auth/token`, data, "post");
        return res.token;
      }
    
      /** Signup for site. */
    
      static async signup(data) {
        let res = await this.request(`auth/register`, data, "post");
        return res.token;
      }
    
      /** Save user profile page. */
    
      static async saveProfile(username, data) {
        let res = await this.request(`users/${username}`, data, "patch");
        return res.user;
      }

      // More functions


  static async getJobsWithQuery(handle) {
    let res = await this.request(`Jobs/?title=${handle}`);
    return res.jobs;
  }

  /** Get details on a job by handle. */

  static async getJob(handle) {
    let res = await this.request(`jobs/${handle}`);
    return res.job;
  }

  /** Get user data by username and valid token. */

  static async getUserData(username, token) {
    this.token = token;
    let res = await this.request(`users/${username}`);
    return res.user;
  }
  static async getTokenForNewUser(userData) {
    let { username, password, firstName, lastName, email } = userData;
    let res = await this.request(
      `auth/register`,
      { username, password, firstName, lastName, email },
      "post"
    );
    return res.token;
  }

  static async updateUser(userData, token) {
    this.token = token;
    let { username, firstName, lastName, email } = userData;
    let res = await this.request(
      `users/${username}`,
      { firstName, lastName, email },
      "patch"
    );
    return res.user;
  }


    }
    
    
    export default JoblyApi;