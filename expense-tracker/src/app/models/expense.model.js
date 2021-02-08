module.exports = (sequelize, Sequelize) => {
	const Expense = sequelize.define('transactions', {	
	  id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
      },
	  date: {
			type: Sequelize.STRING
	  },
	  place: {
		type: Sequelize.STRING
  	  },
	  category: {
			type: Sequelize.STRING
	  },
	  cost: {
			type: Sequelize.STRING
	  }
	}, {
		timestamps: false
	}
	
	);
	
	return Expense;
}

