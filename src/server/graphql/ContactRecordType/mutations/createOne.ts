import { mutationField, nonNull } from 'nexus'

export const ContactRecordTypeCreateOneMutation = mutationField(
  'createOneContactRecordType',
  {
    type: nonNull('ContactRecordType'),
    args: {
      data: nonNull('ContactRecordTypeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.contactRecordType.create({
        data,
        ...select,
      })
    },
  },
)
