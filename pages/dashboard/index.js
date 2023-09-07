import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from 'sweetalert2';

export async function getServerSideProps() {
  const res = await fetch('https://frontend2-hfksezs4g-kuntapat002.vercel.app/api/users/');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}


export default function Component({ posts }) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
  
    if (result.isConfirmed) {
      // Perform the deletion using fetch
      await fetch('https://frontend2-hfksezs4g-kuntapat002.vercel.app/api/users/' + id, {
        method: 'DELETE',
      });
  
      // Reload the page
      router.reload('/dashboard');
  
      // Show success message
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      );
    }
  };

  if (session) {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">Fortune Express</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" href="./">Home</Link>
                </li>
              </ul>
              <div className="navbar-text ms-auto">
                {session.user.email}
                <button className="btn btn-danger ms-2" onClick={() => signOut()}>
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        <div className="container mt-5">
          <div className="card mt-4">
          <div className="card-header">
              <h5>Member List</h5>
            </div>
            <div className="card-body">
              <Link href="./dashboard/user/add/"><button className="btn btn-success text-n mb-2">Add Data</button></Link>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="text-center">No.</th>
                    <th className="text-center">Student ID</th>
                    <th className="text-center">First Name</th>
                    <th className="text-center">Last Name</th>
                    <th className="text-center">Username</th>
                    <th className="text-center">Password</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.users.map((post, i) => (
                    <tr key={post.id}>
                      <td className="text-center">{i+1}</td>
                      <td className="text-center">{post.studentid}</td>
                      <td className="text-center">{post.firstname}</td>
                      <td className="text-center">{post.lastname}</td>
                      <td className="text-center">{post.username}</td>
                      <td className="text-center">{post.password}</td>
                      <td className="text-center">{post.status}</td>
                      <td className="text-center">
                        <Link href={`/dashboard/user/edit/${post.id}`} className="btn btn-warning">
                            <i className="bi bi-pencil-square">Edit</i>
                          </Link>{" "}
                        <button className="btn btn-danger" onClick={() => handleDelete(post.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">My App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
            </ul>
            <div className="navbar-text ms-auto">
              Not signed in
              <button className="btn btn-primary ms-2" onClick={() => signIn()}>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* <div className="container mt-5">
        <p>Not signed in</p>
        <button className="btn btn-primary" onClick={() => signIn()}>
          Sign in
        </button>
      </div> */}
    </>
  );
  
}
