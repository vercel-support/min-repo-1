import { queryField, nonNull, list } from 'nexus'

export const ContactRecordTypeFindManyQuery = queryField(
  'findManyContactRecordType',
  {
    type: nonNull(list(nonNull('ContactRecordType'))),
    args: {
      where: 'ContactRecordTypeWhereInput',
      orderBy: list('ContactRecordTypeOrderByInput'),
      cursor: 'ContactRecordTypeWhereUniqueInput',
      distinct: 'ContactRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.contactRecordType.findMany({
        ...args,
        ...select,
      })
    },
  },
)
