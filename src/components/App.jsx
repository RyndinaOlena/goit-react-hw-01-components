import friends from './data/friends.json'
import profile from './data/profile.json'
import statistics from './data/statistics.json'
import transactions from './data/transactions.json'
import { Profile } from 'profile.js/profile'
import { Statistics } from 'statistics/Statistcs'
import { FriendListItem } from 'friends/friendList'
import { TransactionHistory } from 'transactions/transactions'

export const App = () => {
  return (
    <div>
      <Profile
        key={profile.username}
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
        followers={profile.stats.followers}
        views={profile.stats.views}
        likes={profile.stats.likes}
      />
      <Statistics
        stats={statistics} />
      <FriendListItem friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

