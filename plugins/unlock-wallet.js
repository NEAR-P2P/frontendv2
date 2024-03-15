import localStorageUser from '@/services/local-storage-user';

export default function ({redirect}) {
    localStorage.removeItem("privateKey")
    localStorage.removeItem("publicKey")
    const address = localStorage.getItem("address")

    if (!address) {
        return
    }

    try {
        const account = localStorageUser.getAccount(address)

        if (account.privateKey.startsWith('ed25519:')) {
            localStorage.setItem("privateKey", account.privateKey)
            localStorage.setItem("publicKey", account.publicKey)
        } else {
            setTimeout(() => {
                redirect("/unlock-wallet")
            }, 0);
        }
    } catch (error) {
        console.log(error)
        // localStorage.removeItem("address")
        // localStorage.removeItem("listUser")
        // localStorage.removeItem("auth")
        // location.reload()
    }
  }