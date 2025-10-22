"use client"

import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-celo-dark text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">GigJar</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The decentralized marketplace for global talent. Built on Celo Network.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-celo-green transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-celo-green transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-celo-green transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-celo-green transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-celo-green transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-celo-green transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-celo-green transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-celo-green transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-celo-green/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-celo-green/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-celo-green/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 GigJar. All rights reserved.</p>
          <p>
            Built on <span className="text-celo-green font-semibold">Celo Network</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
