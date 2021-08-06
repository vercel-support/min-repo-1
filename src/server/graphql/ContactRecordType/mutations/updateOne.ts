import { mutationField, nonNull } from 'nexus'

export const ContactRecordTypeUpdateOneMutation = mutationField(
  'updateOneContactRecordType',
  {
    type: nonNull('ContactRecordType'),
    args: {
      where: nonNull('ContactRecordTypeWhereUniqueInput'),
      data: nonNull('ContactRecordTypeUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.contactRecordType.update({
        where,
        data,
        ...select,
      })
    },
  },
)
