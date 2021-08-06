import { queryField, nonNull } from 'nexus'

export const AccountStatusFindUniqueQuery = queryField(
  'findUniqueAccountStatus',
  {
    type: 'AccountStatus',
    args: {
      where: nonNull('AccountStatusWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.accountStatus.findUnique({
        where,
        ...select,
      })
    },
  },
)
