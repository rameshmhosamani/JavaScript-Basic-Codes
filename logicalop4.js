console.log(1 || 0);    // 1 (i is true )

console.log(null || 1);    // 1 (1 is first the truthly)

console.log(null || 0 || 1);    // 1 (the first the truthly)

console.log(undefined || null || 0);   // 0 (all falsy,returns the last value)

