import { queryField, list } from 'nexus'

export const ContactRecordTypeFindFirstQuery = queryField(
  'findFirstContactRecordType',
  {
    type: 'ContactRecordType',
    args: {
      where: 'ContactRecordTypeWhereInput',
      orderBy: list('ContactRecordTypeOrderByInput'),
      cursor: 'ContactRecordTypeWhereUniqueInput',
      distinct: 'ContactRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.contactRecordType.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
