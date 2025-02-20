"use server"

interface values {
    username: string
    password: string
}

export const login = async (values: values) => {
    const response = await fetch(`${process.env.API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
    if (response.status !== 200){
        return response.json()
    }
    return {statusCode: 200, body: await response.json()}
}