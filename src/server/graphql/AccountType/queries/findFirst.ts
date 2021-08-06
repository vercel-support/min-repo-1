import { queryField, list } from 'nexus'

export const AccountTypeFindFirstQuery = queryField('findFirstAccountType', {
  type: 'AccountType',
  args: {
    where: 'AccountTypeWhereInput',
    orderBy: list('AccountTypeOrderByInput'),
    cursor: 'AccountTypeWhereUniqueInput',
    distinct: 'AccountTypeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.accountType.findFirst({
      ...args,
      ...select,
    })
  },
})
