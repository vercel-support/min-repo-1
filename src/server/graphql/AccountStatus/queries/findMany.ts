import { queryField, nonNull, list } from 'nexus'

export const AccountStatusFindManyQuery = queryField('findManyAccountStatus', {
  type: nonNull(list(nonNull('AccountStatus'))),
  args: {
    where: 'AccountStatusWhereInput',
    orderBy: list('AccountStatusOrderByInput'),
    cursor: 'AccountStatusWhereUniqueInput',
    distinct: 'AccountStatusScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.accountStatus.findMany({
      ...args,
      ...select,
    })
  },
})
