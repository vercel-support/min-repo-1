import { queryField, nonNull, list } from 'nexus'

export const AccountStatusFindCountQuery = queryField(
  'findManyAccountStatusCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'AccountStatusWhereInput',
      orderBy: list('AccountStatusOrderByInput'),
      cursor: 'AccountStatusWhereUniqueInput',
      distinct: 'AccountStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.accountStatus.count(args as any)
    },
  },
)
