const recentSubmissionsAndProfileData = `
    query getRecentSubmissionsAndProfileData {
    recentAcSubmissionList(username: "William_Pattison", limit: 20) {
        title
        titleSlug
        timestamp
    }
    matchedUser(username: "William_Pattison") {
            username
            submitStats: submitStatsGlobal {
                acSubmissionNum {
                    difficulty
                    count
                    submissions
                }
            }
        }
    }
`;



export const SWRParams = [
    'https://leetcode.com/graphql',
    {
        method:'GET',
        body: JSON.stringify({query: recentSubmissionsAndProfileData}),
        headers: {
            'Content-Type':'application/json',
        }
    }
]