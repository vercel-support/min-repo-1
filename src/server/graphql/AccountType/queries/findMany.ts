import { queryField, nonNull, list } from 'nexus'

export const AccountTypeFindManyQuery = queryField('findManyAccountType', {
  type: nonNull(list(nonNull('AccountType'))),
  args: {
    where: 'AccountTypeWhereInput',
    orderBy: list('AccountTypeOrderByInput'),
    cursor: 'AccountTypeWhereUniqueInput',
    distinct: 'AccountTypeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.accountType.findMany({
      ...args,
      ...select,
    })
  },
})
