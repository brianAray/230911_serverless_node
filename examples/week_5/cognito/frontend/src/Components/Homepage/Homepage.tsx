
function Homepage(props: any) {
  return (
    <>
        <h2>Welcome user!</h2>
        {props.userData.session.accessToken.jwtToken}
    </>
  )
}

export default Homepage