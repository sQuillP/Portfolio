"use server";

const query = `
query getRecentSubmissionsAndProfileData {
  recentAcSubmissionList(username: "William_Pattison", limit: 20) {
    title
    titleSlug
    timestamp
  }
allQuestionsCount {
    difficulty
    count
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
    profile {
      ranking
    }
  }
    
}
`;





export async function getLeetcodeData() {
    try {
        const response = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
            next: 86400
          });
        const json = await response.json();
        const submissions = json.data.recentAcSubmissionList;
        const user = json.data.matchedUser;
        const totalQuestions = json.data.allQuestionsCount;
        const difficultyMap = {};
        for(let i = 0; i<totalQuestions.length; i++) {
            difficultyMap[totalQuestions[i].difficulty] = totalQuestions[i].count
        }
        for(let i = 0; i<user.submitStats.acSubmissionNum.length; i++) {
            user.submitStats.acSubmissionNum[i]['total'] = difficultyMap[user.submitStats.acSubmissionNum[i].difficulty];
        }
        return {submissions, user};
    } catch(error) {
        console.log(error);
        return null;
    }
}