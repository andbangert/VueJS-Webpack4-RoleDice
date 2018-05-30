'use strict'

import CryptoJS from 'crypto-js'
import { NumberUtil } from './numberUtils'

class HashUtil {
  // static getPercentResult (customClientHash) {
  //   let clientHash = ''
  //   // Check if custom client hash not empty
  //   if (!customClientHash || customClientHash !== '') {
  //     clientHash = (parseInt(customClientHash, 16) - this.nonce).toString() // hex - nonce
  //   } else {
  //     this.generateClientHash()
  //     clientHash = (parseInt(customClientHash, 16) - this.nonce).toString() // hex - nonce
  //   }
  //   return CryptoJS.HmacSHA256(this.secretServerHash, clientHash).toString()
  // }
  // static generateServerSeed () {
  //   let secretServerHash = parseInt(Date.now(), 16).toString()
  // }
  // This method generates hashes.
  // Algorithms are the same for both client seed and server secret hash.
  static generateUnhashed () {
    let revNum = parseFloat(Date.now() + Math.random(), 16)
    let unhashed = CryptoJS.SHA256(revNum.toString()).toString()
    return unhashed.substring(0, 16)
  }
  static hashUnhashed (unhashed) {
    return CryptoJS.SHA256(unhashed).toString()
  }
  static getPercent (secretHash, clientHash, nonce) {
    let noncedClientHash = `${clientHash}-${nonce}`
    let HmacSHA256 = CryptoJS.HmacSHA256(secretHash, noncedClientHash).toString()
    // Get first 5 symbols from hash and convert to hex by add 0x
    // Generated template number is 00.00
    let endHash = this.toHexString(HmacSHA256.substr(0, 5))
    let result = (parseInt(endHash) % 10000) / 100
    return NumberUtil.decimalCeil(result, -4)
  }
  static toHexString (hash) {
    return `0x${hash}`
  }
}

export { HashUtil }
