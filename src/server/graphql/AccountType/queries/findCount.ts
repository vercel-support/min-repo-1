import { queryField, nonNull, list } from 'nexus'

export const AccountTypeFindCountQuery = queryField(
  'findManyAccountTypeCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'AccountTypeWhereInput',
      orderBy: list('AccountTypeOrderByInput'),
      cursor: 'AccountTypeWhereUniqueInput',
      distinct: 'AccountTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.accountType.count(args as any)
    },
  },
)
