module my_first_package::my_module {
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};

    struct Counter has key {
        id: UID,
        count: u64,
        secondary_count: u64,
    }

    fun init(ctx: &mut TxContext) {
        let public_counter = Counter {
            id: object::new(ctx),
            count: 0,
            secondary_count: 0,
        };
        let counter = Counter {
            id: object::new(ctx),
            count: 0,
            secondary_count: 0,
        };

        transfer::transfer(counter, tx_context::sender(ctx));
        transfer::share_object(public_counter);
    }

    public fun create_counter(ctx: &mut TxContext) {
        let counter = Counter {
            id: object::new(ctx),
            count: 0,
            secondary_count: 0,
        };
        transfer::transfer(counter, tx_context::sender(ctx));
    }

    public fun increment_count(counter: &mut Counter, _ctx: &mut TxContext): u64 {
        counter.count = counter.count + 1;

        counter.count
    }

    public fun increment_secondary_count(counter: &mut Counter, _ctx: &mut TxContext): u64 {
        counter.secondary_count = counter.secondary_count + 1;

        counter.secondary_count
    }

    public fun get_count(counter: &Counter, _ctx: &mut TxContext): u64 {
        counter.count
    }

    public fun get_secondary_count(counter: &Counter, _ctx: &mut TxContext): u64 {
        counter.secondary_count
    }
}
