export const getWallet = (coin: string) => {

    switch (coin) {

        case "btc":
            return "bc1qs6mmr2gjfekts6sdttnfp9efwr7gdn4qqaqya2"
        case "ethereum":
            return "0x704b7507052EC1a52E39460f8929D8FBf42516C9"
        case "binance":
            return "0x704b7507052EC1a52E39460f8929D8FBf42516C9"
        case "tron":
            return "TJ7Z2N1ntz1NiWuSp7QMXuksR4QdGUpPh2"
        case "usdtt":
            return "TJ7Z2N1ntz1NiWuSp7QMXuksR4QdGUpPh2"
        case "usdte":
            return "0x704b7507052EC1a52E39460f8929D8FBf42516C9"
        case "solana":
            return "DxZcXDjE8pede67BL6uuG34zTCmy8JZN55vsBwnBcVw3"
        case "ada":
            return "addr1qy55t7q5ma2x4rvv9qjghrtar7k5hfvt2zv74a5rmv5jsw9tfatyructekymkhtngqjk306wr59zxwyksjmuel55cgfqnxkgwt"
        case "lite":
            return "ltc1q4wnqdpavf3fzajkz5fyyuvxajavhhyflwe8t2z"
        case "doge":
            return "DAY5ZHT3bcgSmCn8HTJ7NcBVwdUsJXa35H"

        default: "0x704b7507052EC1a52E39460f8929D8FBf42516C9"
    }
}

//Change this too BASTARDS
// 0x704b7507052EC1a52E39460f8929D8FBf42516C9