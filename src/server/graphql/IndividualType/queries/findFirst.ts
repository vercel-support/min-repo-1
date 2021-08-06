import { queryField, list } from 'nexus'

export const IndividualTypeFindFirstQuery = queryField(
  'findFirstIndividualType',
  {
    type: 'IndividualType',
    args: {
      where: 'IndividualTypeWhereInput',
      orderBy: list('IndividualTypeOrderByInput'),
      cursor: 'IndividualTypeWhereUniqueInput',
      distinct: 'IndividualTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.individualType.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
