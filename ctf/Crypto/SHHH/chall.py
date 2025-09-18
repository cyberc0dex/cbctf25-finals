from utils import listener
from sage.all import *
from flag import flag

n = 64
p = 257
q = 65537
V = [VectorSpace(GF(q), n),VectorSpace(GF(q), 2*n),VectorSpace(GF(q), 4*n)]
S = [V[0].random_element(),V[1].random_element(),V[2].random_element()]


def encrypt(m):
    i = randint(0,2)
    A = V[i].random_element()
    e = randint(-1, 1)
    b = A * S[i] + m + p * e
    return A, b


class Challenge:
    def __init__(self):
        self.before_input = "SHHH! Keep the noise down, I am learning PQC! What do you want to do?\n"

    def challenge(self,your_input):
        if 'option' not in your_input:
            return {'error': 'You must specify an option'}

        if your_input['option'] == 'encrypt_flag':
            if "index" not in your_input:
                return {"error": "You must provide an index"}
                self.exit = True

            index = int(your_input["index"])
            A, b = encrypt(flag[index%len(flag)])
            return {"A": str(list(A)), "b": str(int(b))}

        elif your_input['option'] == 'encrypt_msg':
            if "msg" not in your_input:
                return {"error": "You must provide a msg"}
                self.exit = True

            message = int(your_input["msg"])
            A, b = encrypt(message%p)
            return {"A": str(list(A)), "b": str(int(b))}

        return {'error': 'Unknown command'}

import builtins; builtins.Challenge = Challenge
listener.start_server(port=12345)
