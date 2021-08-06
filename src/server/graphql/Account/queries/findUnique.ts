import { queryField, nonNull } from 'nexus'

export const AccountFindUniqueQuery = queryField('findUniqueAccount', {
  type: 'Account',
  args: {
    where: nonNull('AccountWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.account.findUnique({
      where,
      ...select,
    })
  },
})
