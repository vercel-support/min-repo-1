import { queryField, list } from 'nexus'

export const MaritalStatusFindFirstQuery = queryField(
  'findFirstMaritalStatus',
  {
    type: 'MaritalStatus',
    args: {
      where: 'MaritalStatusWhereInput',
      orderBy: list('MaritalStatusOrderByInput'),
      cursor: 'MaritalStatusWhereUniqueInput',
      distinct: 'MaritalStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.maritalStatus.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
