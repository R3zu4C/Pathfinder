class priority_queue {
	queue = [];

	upheapify(idx) {
		if (idx === 0) return;
		let parent_idx = Math.floor((idx - 1) / 2);
		if (this.queue[parent_idx].distance > this.queue[idx].distance) {
			let temp = this.queue[idx];
			this.queue[idx] = this.queue[parent_idx];
			this.queue[parent_idx] = temp;
			this.upheapify(parent_idx);
		}
		return;
	}

	downheapify(idx) {
		let left_child = 2 * idx + 1;
		let right_child = 2 * idx + 2;

		if (left_child >= this.queue.length && right_child >= this.queue.length) return;

		let swap_idx = idx;

		if (left_child < this.queue.length && this.queue[swap_idx].distance > this.queue[left_child].distance) {
			swap_idx = left_child;
		}

		if (right_child < this.queue.length && this.queue[swap_idx].distance > this.queue[right_child].distance) {
			swap_idx = right_child;
		}

		if (swap_idx === idx) return;

		let temp = this.queue[idx];
		this.queue[idx] = this.queue[swap_idx];
		this.queue[swap_idx] = temp;
		this.downheapify(swap_idx);
		return;
	}

	empty() {
		return this.queue.length === 0;
	}

	push(val) {
		this.queue.push(val);
		this.upheapify(this.queue.length - 1);
		return;
	}

	pop() {
		let i = this.queue.length - 1;
		this.queue[0] = this.queue[i];
		this.queue.pop();
		this.downheapify(0);
	}

	top() {
		return this.queue[0];
	}
}

export default priority_queue;