
type UserId = string & { readonly __brand: unique symbol };
type Email = string & { readonly __brand: unique symbol };

function asUserId(s: string): UserId {
  // (validate format, throw on bad input)
  return s as UserId;
}

function asEmail(s: string): Email {
  if (!s.includes("@")) throw new Error("no an email");
  return s as Email;
}

function sendEmail(userId: UserId, email: Email) {
  //...
}

sendEmail(asUserId('user-id'), asEmail('ada@example.com')) //OK
// sendEmail('ada@example.com', 'user-123'); // ERROR - Not branded

type Brand<T, B> = T & {readonly __brand: B};

type USD = Brand<number, 'USD'>;
type EUR = Brand<number, 'EUR'>;

function toUSD(n: number): USD {return n as USD};
function toEUR(n: number): EUR {return n as EUR};

function addUSD(a: USD, b: USD): USD {return (a + b) as USD}
const price = toUSD(10);
const tax = toUSD(2);
addUSD(price, tax); // OK
// addUSD(price, toEUR(2)) //ERROR