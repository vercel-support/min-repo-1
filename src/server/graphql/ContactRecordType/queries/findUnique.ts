import { queryField, nonNull } from 'nexus'

export const ContactRecordTypeFindUniqueQuery = queryField(
  'findUniqueContactRecordType',
  {
    type: 'ContactRecordType',
    args: {
      where: nonNull('ContactRecordTypeWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.contactRecordType.findUnique({
        where,
        ...select,
      })
    },
  },
)
