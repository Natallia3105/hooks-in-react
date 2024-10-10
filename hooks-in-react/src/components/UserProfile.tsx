import { useEffect, useState } from "react"

interface User {
    name: {
        first: string;
        last: string
    };
    email: string;
    picture: {
        large: string;
    }
}

export const UserProfile: React.FC = () => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchData = async() => {
        try {
            const response = await fetch('https://randomuser.me/api/')
            if (!response.ok) {
                throw new Error('some error')
            }
            const data = await response.json();
            setUser(data.results[0]);
            setLoading(false)
        } catch(e) {
            setError('another error' + e);
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);


    if (loading) {
        return <p>data loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }
  return (
      <div>
        <h2>user profile</h2>
        {user && (
            <>
            <img src={user.picture.large} alt="user-image" />
            <h3>{`${user.name.first} ${user.name.last}`}</h3>
            <p>email {user.email}</p>
            </>
        )}
      </div>
  )
}