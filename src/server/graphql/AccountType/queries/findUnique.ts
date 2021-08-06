import { queryField, nonNull } from 'nexus'

export const AccountTypeFindUniqueQuery = queryField('findUniqueAccountType', {
  type: 'AccountType',
  args: {
    where: nonNull('AccountTypeWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.accountType.findUnique({
      where,
      ...select,
    })
  },
})
