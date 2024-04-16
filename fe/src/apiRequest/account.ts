import http from "@/lib/http";

const accountApiRequest = {
  getProfile: (sessionToken: string)=> http.get<IProfileRes>('user/profile', {
    headers: {
      Authorization: `Bearer ${sessionToken}`
    }
  })
}

export default accountApiRequest