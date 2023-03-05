export default function useToken(token: string) {
	const tokenBody = JSON.parse(atob(token.split('.')[1]))

	return tokenBody
}
