
import random
import string

def generate_key_for():
    chars = string.ascii_uppercase + string.digits
    groups = [
        ''.join(random.choice(chars) for _ in range(5))
        for _ in range(3)
    ]
    return '-'.join(groups)

def generate_keys(amount=1):
    keys = []
    seen = set()

    while len(keys) < amount:
        key = generate_key_for()
        if key not in seen:
            seen.add(key)
            keys.append(key)

    return keys
