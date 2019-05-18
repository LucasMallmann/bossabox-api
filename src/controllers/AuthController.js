const User = require('../models/User')

class AuthController {
  async login (req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    if (!(await user.compareHash(password))) {
      return res.status(400).json({ error: "Password didn't match" })
    }

    const token = await User.generateToken(user)

    return res.status(200).json({ user, token })
  }
}

module.exports = new AuthController()
