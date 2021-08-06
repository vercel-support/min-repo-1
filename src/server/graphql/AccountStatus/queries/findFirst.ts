import { queryField, list } from 'nexus'

export const AccountStatusFindFirstQuery = queryField(
  'findFirstAccountStatus',
  {
    type: 'AccountStatus',
    args: {
      where: 'AccountStatusWhereInput',
      orderBy: list('AccountStatusOrderByInput'),
      cursor: 'AccountStatusWhereUniqueInput',
      distinct: 'AccountStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.accountStatus.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
