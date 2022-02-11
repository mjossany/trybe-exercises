def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_cans % 18:
        required_cans += 1
    return print(required_cans, required_cans * can_price)


paint_costs(150)
